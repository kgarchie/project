import type {H3Event} from 'h3'
import {readFiles} from 'h3-formidable'
import {GPTChat, HttpResponse} from '~/types'
import {storeFiles, transcribeAudio, summariseText} from './helpers'
import {ChatCompletionMessageParam} from "openai/src/resources/chat/completions";

export async function storeUploadedFile(event: H3Event) {
    const {files} = await readFiles(event)

    const response = {} as HttpResponse
    let paths: string[]

    try {
        paths = await storeFiles(files.file)
    } catch (error) {
        console.error(error)
        response.body = error
        response.status = 500
        return response
    }

    response.body = paths
    response.status = 200

    return response
}


export async function provideTranscript(event: H3Event) {
    const {url: audioUrl} = await readBody(event) ?? null

    const response = {} as HttpResponse

    if (!audioUrl) {
        response.body = 'Missing audioUrl'
        response.status = 400
        return response
    }

    try {
        await transcribeAudio(event, decodeURIComponent(audioUrl))
    } catch (error) {
        response.body = error
        response.status = 500
        return response
    }
}


export async function provideSummary(event: H3Event) {
    const {text} = await readBody(event) ?? null
    const response = {} as HttpResponse
    let summary: string

    if (!text) {
        response.body = 'Missing text'
        response.status = 400
        return response
    }

    try {
        let messages = [{
            role: 'system',
            content: 'You are an AI text summariser. You make minutes or summaries of text given to you. Most text is formal, keep it that way. Write in report tone. The text given is conversational so extract the important things discussed and try to come up with what is requested. Between minutes of meetings and summaries.'
        }, {
            role: 'user',
            content: `${text}\n Summary:`
        }] as ChatCompletionMessageParam[]

        let prompt = {
            messages: messages,
            model: 'gpt-3.5-turbo'
        } as GPTChat

        summary = await summariseText(event, prompt)
    } catch (error) {
        response.body = error
        response.status = 500
        return response
    }

    response.body = summary
    response.status = 200

    return response
}