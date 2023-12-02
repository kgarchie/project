import * as fs from "fs";
import { ulid } from "ulid";
import path from "path";
import { allowedAPIInterval, type GPTChat } from "~/types";
import { H3Event } from "h3";
import { GPTChatQueueItem, OpenAiAudioTranscribeItem } from "~/helpers.server";

const FILE_STORAGE_LOCATION = path.join(process.cwd(), process.env.LOCAL_FILE_STORE || "public", "uploads")

declare global {
    var gptChatQueue: GPTChatQueueItem[]
    var processingGPTChat: boolean
    var processingAudioTranscription: boolean
    var audioTranscriptionQueue: OpenAiAudioTranscribeItem[]
}

export async function storeFiles(files: any) {
    if (!fs.existsSync(FILE_STORAGE_LOCATION)) {
        fs.mkdirSync(FILE_STORAGE_LOCATION, { recursive: true })
    }

    return await Promise.all(files.map(async (file: any) => {
        const path = await getPath(file)
        await saveFile(file, path)

        return path
    }))
}

async function saveFile(file: any, path: string) {
    return new Promise((resolve, reject) => {
        fs.rename(file.filepath, path, (error) => {
            if (error) {
                return reject(error)
            }

            return resolve('ok')
        })
    })
}


async function getPath(file: any) {
    let fileName = file.originalFilename.split('.')
    let extension = fileName.pop()

    fileName = fileName.join('').replace(/[^a-zA-Z0-9-_]/g, '_')

    let path = `${FILE_STORAGE_LOCATION}/${fileName}.${extension}`

    while (await fileExists(path)) {
        path = `${FILE_STORAGE_LOCATION}/${fileName}_${ulid()}.${extension}`
    }

    return path
}

async function fileExists(path: string) {
    return new Promise((resolve, reject) => {
        fs.access(path, (error) => {
            if (error) {
                return resolve(false)
            }

            return resolve(true)
        })
    })
}


export async function transcribeAudio(event: H3Event, path: string): Promise<string> {
    return addToGlobalProcessingQueue(new OpenAiAudioTranscribeItem(event, path))
}

export function summariseText(event: H3Event, chat: GPTChat): Promise<string> {
    return addToGlobalProcessingQueue(new GPTChatQueueItem(event, chat))
}


function addToGlobalProcessingQueue(item: GPTChatQueueItem | OpenAiAudioTranscribeItem): Promise<string> {
    return new Promise((resolve, reject) => {
        if (!global.gptChatQueue) global.gptChatQueue = []

        if (!global.audioTranscriptionQueue) global.audioTranscriptionQueue = []

        if (item instanceof GPTChatQueueItem) {
            global.gptChatQueue.push(item)
        } else {
            global.audioTranscriptionQueue.push(item)
        }

        if (!global.processingGPTChat) {
            global.processingGPTChat = true
            processGPTChatQueue()
        }

        if (!global.processingAudioTranscription) {
            global.processingAudioTranscription = true
            processAudioTranscriptionQueue()
        }

        resolve('ok')
    })
}


async function processGPTChatQueue() {
    for await (const item of global.gptChatQueue) {
        const item = global.gptChatQueue.shift()
        if (!item) return
        await item.stream()
        await new Promise(resolve => setTimeout(resolve, allowedAPIInterval))
    }

    global.processingGPTChat = false
}

async function processAudioTranscriptionQueue() {
    for await (const item of global.audioTranscriptionQueue) {
        const item = global.audioTranscriptionQueue.shift()
        if (!item) return
        await item.offlineTranscribe()
        await new Promise(resolve => setTimeout(resolve, allowedAPIInterval))
    }

    global.processingAudioTranscription = false
}