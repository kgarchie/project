import type {H3Event} from 'h3'
import {readFiles} from 'h3-formidable'
import {AuthCookie, GPTChat, HttpResponse} from '~/types'
import {storeFiles, transcribeAudio, summariseText} from './helpers'
import {ChatCompletionMessageParam} from "openai/src/resources/chat/completions";
import {getHistoryByUserId, getMeetingById, insertAudio, insertSummary} from "~/mvc/transcriptions/queries";
import {insertTranscript} from "~/mvc/transcriptions/queries";

export async function storeUploadedFile(event: H3Event) {
    const {files, fields} = await readFiles(event)

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

    const cookie = getCookie(event, 'user')
    if (!cookie) {
        response.body = 'Missing cookie'
        response.status = 400
        return response
    }

    const userCookie = JSON.parse(cookie) as AuthCookie
    if (!userCookie) {
        response.body = 'Invalid cookie'
        response.status = 400
        return response
    }

    const query = await insertAudio(userCookie.userId, fields.title, fields.key, paths[0]).catch(
        error => error as Error
    )

    if (query instanceof Error) {
        response.body = query
        response.status = 500
        return response
    }

    response.body = {
        path: paths[0],
        meetingId: query.id
    }
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
    const {text, meetingId} = await readBody(event) ?? null
    const response = {} as HttpResponse
    let summary: string

    if (!text) {
        response.body = 'Missing text'
        response.status = 400
        return response
    }

    const meeting = await getMeetingById(meetingId).catch(error => error as Error)

    if (meeting instanceof Error) {
        response.body = meeting
        response.status = 500
        return response
    }

    try {
        let messages = [{
            role: 'system',
            content: `You are an astute text summariser who is always on to the point. \n
            You are going to be give transcripts with time stamps. Give a summary. \n
            You can never add or subtract anything from them be as formal as can be. \n
            You make minutes or summaries of text given to you. Most text is formal, \n
            keep it that way. Write in report tone. You must only give summaries. \n
            The summaries should capture the whole idea but still be significantly shorter. \n
            You will be given additional context, use that to deduce the best summary. and what to focus on`
        }, {
            role: 'user',
            content: `Meeting Title : ${meeting?.title} \n
                       Meeting KeyWords : ${meeting?.keywords} \n`
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


export async function storeTranscript(event: H3Event) {
    const {text, meetingId} = await readBody(event) ?? null
    const response = {} as HttpResponse

    if (!text) {
        response.body = 'Missing text'
        response.status = 400
        return response
    }

    const cookie = getCookie(event, 'user')
    if (!cookie) {
        response.body = 'Missing cookie'
        response.status = 401
        return response
    }

    const userCookie = JSON.parse(cookie) as AuthCookie
    if (!userCookie) {
        response.body = 'Invalid cookie'
        response.status = 401
        return response
    }

    const query = await insertTranscript(userCookie.userId, meetingId, text).catch(
        error => error as Error
    )

    if (query instanceof Error) {
        response.body = query
        response.status = 500
        return response
    }

    response.body = query
    response.status = 200

    return response
}

export async function storeSummary(event: H3Event) {
    const {text, meetingId} = await readBody(event) ?? null
    const response = {} as HttpResponse

    if (!text) {
        response.body = 'Missing text'
        response.status = 400
        return response
    }

    const cookie = getCookie(event, 'user')
    if (!cookie) {
        response.body = 'Missing cookie'
        response.status = 401
        return response
    }

    const userCookie = JSON.parse(cookie) as AuthCookie
    if (!userCookie) {
        response.body = 'Invalid cookie'
        response.status = 401
        return response
    }

    const query = await insertSummary(userCookie.userId, meetingId, text).catch(
        error => error as Error
    )

    if (query instanceof Error) {
        response.body = query
        response.status = 500
        return response
    }

    response.body = query
    response.status = 200

    return response
}


export async function getHistory(event: H3Event) {
    const response = {} as HttpResponse

    const cookie = getCookie(event, 'user')
    if (!cookie) {
        response.body = 'Missing cookie'
        response.status = 401
        return response
    }

    const userCookie = JSON.parse(cookie) as AuthCookie
    if (!userCookie) {
        response.body = 'Invalid cookie'
        response.status = 401
        return response
    }

    const query = await getHistoryByUserId(userCookie.userId).catch(
        error => error as Error
    )

    if (query instanceof Error) {
        response.body = query
        response.status = 500
        return response
    }

    response.body = query
    response.status = 200

    return response
}