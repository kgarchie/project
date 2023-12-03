import { H3Event } from "h3";
import { openai } from "~/mvc/external/OpenAi";
import Ffmpeg from "fluent-ffmpeg";
import fs from "fs";
import { GPTChat, HttpResponse, statusCodes } from "~/types";
import { transcribe } from "~/speech/transcribe.python";

export class Stream {
    private headersSent: boolean;
    private _event: H3Event;

    constructor(event: H3Event) {
        this.headersSent = false;
        this._event = event;
        this.flushHeaders()
    }

    flushHeaders() {
        if (!this.headersSent) {
            this._event.node.res.setHeader('Content-Type', 'text/event-stream');
            this._event.node.res.setHeader('Cache-Control', 'no-cache');
            this._event.node.res.setHeader('Connection', 'keep-alive');
            this._event.node.res.flushHeaders();
            this.headersSent = true;
        } else {
            console.warn("Headers already sent")
        }

        this._event.node.res.flushHeaders();

        const response = {} as HttpResponse
        response.status = statusCodes.startedStream

        this._event.node.res.write(JSON.stringify(response))
    }

    write(chunk: any) {
        this._event.node.res.write(chunk);
    }

    end() {
        this._event.node.res.end();
    }
}

export class GPTChatQueueItem {
    private readonly _gptChat: GPTChat;
    private readonly _stream: Stream;

    constructor(event: H3Event, gptChat: GPTChat) {
        this._stream = new Stream(event)
        this._gptChat = gptChat;
    }

    async stream() {
        try {
            const completion = await openai.chat.completions.create({
                ...this._gptChat,
                stream: true
            })

            for await (const chunk of completion) {
                this._stream.write(JSON.stringify(
                    {
                        status: statusCodes.summaryUpdate,
                        body: chunk.choices[0].delta.content || ''
                    } as HttpResponse
                ))
            }

            this._stream.end()
        } catch (e: any) {
            this._stream.write(JSON.stringify(
                {
                    status: statusCodes.summaryError,
                    body: e?.message ?? "Unknown error"
                } as HttpResponse
            ))
            this._stream.end();
        }
    }
}

export class OpenAiAudioTranscribeItem {
    private readonly _stream: Stream;
    private _audioUrl: string;
    private readonly allowedAudioFormats = [
        'mp3',
        'wav',
        'ogg',
        'flac',
        'm4a',
        'mp4',
        'webm',
        'mpga'
    ];

    constructor(event: H3Event, audioUrl: string) {
        this._stream = new Stream(event)
        this._audioUrl = audioUrl

        if (!process.env.FFMPEG_PATH || !process.env.FFPROBE_PATH) {
            this._stream.write(JSON.stringify({
                status: statusCodes.fatalError,
                body: "Missing ffmpeg | ffprobe path"
            } as HttpResponse))

            this._stream.end()
            throw new Error("Missing ffmpeg | ffprobe path")
        }

        Ffmpeg.setFfmpegPath(process.env.FFMPEG_PATH);
        Ffmpeg.setFfprobePath(process.env.FFPROBE_PATH);
    }

    convertToMp3() {
        const type = this._audioUrl.split('.').at(-1) ?? null

        if (!type) {
            this._stream.write(JSON.stringify({
                status: statusCodes.mp3conversionError,
                body: "Missing audio file type"
            } as HttpResponse))

            return this._stream.end()
        }

        this._stream.write(JSON.stringify({
            status: statusCodes.mp3conversionUpdate,
            body: 0
        } as HttpResponse))

        if (!this.allowedAudioFormats.includes(type)) {
            return new Promise((resolve, reject) => {
                if (this.isMp3) return resolve("ok")

                if (this.hasMp3) {
                    this._audioUrl = `${this._audioUrl}.mp3`
                    return resolve("ok")
                }

                const totalDuration = new Promise((resolve, reject) => {
                    Ffmpeg.ffprobe(this._audioUrl, (err, metadata) => {
                        if (err) return reject(err)
                        resolve(metadata.format?.duration)
                    })
                })

                function timeToSeconds(time: string) {
                    const [hours, minutes, seconds] = time.split(':').map(parseFloat);
                    return hours * 3600 + minutes * 60 + seconds;
                }

                const calculatePercentageProgress = async (progress: {
                    frames: number | null,
                    currentFps: number | null,
                    currentKbps: number,
                    targetSize: number,
                    timemark: string
                }) => {
                    const duration = await totalDuration as number || 0
                    const current = timeToSeconds(progress.timemark)
                    return Math.round(current / duration * 100)
                }

                Ffmpeg(this._audioUrl)
                    .toFormat('mp3')
                    .on('error', (err) => {
                        console.error(err)
                        this._stream.write(JSON.stringify({
                            status: statusCodes.mp3conversionError,
                            body: err
                        } as HttpResponse))

                        this._stream.end()
                        return reject()
                    })
                    .on('progress', async (progress: {
                        frames: number | null,
                        currentFps: number | null,
                        currentKbps: number,
                        targetSize: number,
                        timemark: string
                    }) => {
                        this._stream.write(JSON.stringify({
                            status: statusCodes.mp3conversionUpdate,
                            body: await calculatePercentageProgress(progress) || 0
                        } as HttpResponse))
                    })
                    .save(`${this._audioUrl}.mp3`)
                    .on('end', () => {
                        this._stream.write(JSON.stringify({
                            status: statusCodes.mp3conversionEnd,
                            body: 100
                        } as HttpResponse))

                        if (!this.isMp3) this._audioUrl = `${this._audioUrl}.mp3`
                        resolve("ok")
                    })
            })
        }
    }

    get isMp3() {
        return this._audioUrl.endsWith('.mp3')
    }

    get hasMp3() {
        return fs.existsSync(`${this._audioUrl}.mp3`)
    }

    get fileSize() {
        return fs.statSync(this._audioUrl).size
    }

    /**
     * Transcribe audio using OpenAI, limits file size to 25MB hence undesirable
     *
     * @deprecated
     */
    async transcribe() {
        if (!this.isMp3) await this.convertToMp3()

        if (this.fileSize > 25 * 1024 * 1024) return this.offlineTranscribe()

        const transcription = await openai.audio.transcriptions.create({
            file: fs.createReadStream(this._audioUrl),
            model: "whisper-1",
        }).catch(
            (error) => {
                console.error(error)
                this._stream.write(JSON.stringify({
                    status: statusCodes.transcriptionError,
                    body: error
                } as HttpResponse))

                this._stream.end()
                return error
            }
        )

        this._stream.write(JSON.stringify({
            status: statusCodes.transcriptionSuccess,
            body: transcription.text
        } as HttpResponse))

        this._stream.end()
    }

    /**
     * Transcribe audio using a local python script, no file size limit, slower, depending on hardware
     */
    async offlineTranscribe() {
        if (!this.isMp3) await this.convertToMp3()
        await transcribe(this._audioUrl, (chunk, error) => {
            if (error) {
                this._stream.write(JSON.stringify({
                    status: statusCodes.transcriptionError,
                    body: error
                } as HttpResponse))
            } else {
                this._stream.write(JSON.stringify({
                    status: statusCodes.transcriptionUpdate,
                    body: chunk
                } as HttpResponse))
            }
        }).catch((error) => {
            console.error(error)
            this._stream.write(JSON.stringify({
                status: statusCodes.transcriptionError,
                body: error
            } as HttpResponse))
        }).finally(() => {
            this._stream.end()
        })
    }
}
