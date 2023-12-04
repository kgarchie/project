import {createRouter, defineEventHandler} from 'h3'
import {
    storeUploadedFile,
    provideTranscript,
    provideSummary,
    storeTranscript,
    storeSummary,
    getHistory
} from './methods'
import {HttpResponse} from "~/types";
import {getSummaryById, getTranscriptById} from "~/mvc/transcriptions/queries";


const router = createRouter()

router.post('/upload', defineEventHandler(async (event) => {
    return storeUploadedFile(event)
}))

router.post('/transcript', defineEventHandler(async (event) => {
    return provideTranscript(event)
}));

router.post('/summary', defineEventHandler(async (event) => {
    return provideSummary(event)
}));

router.post('/transcript/store', defineEventHandler(async (event) => {
    return storeTranscript(event)
}));

router.post('/summary/store', defineEventHandler(async (event) => {
    return storeSummary(event)
}));

router.get('/transcript/:id', defineEventHandler(async (event) => {
    const id = event.context.params!.id

    const response = {} as HttpResponse
    if(!id) {
        response.body = 'Missing id'
        response.status = 400
        return response
    }

    return getTranscriptById(id)
}));

router.get('/summary/:id', defineEventHandler(async (event) => {
    const id = event.context.params!.id

    const response = {} as HttpResponse
    if(!id) {
        response.body = 'Missing id'
        response.status = 400
        return response
    }

    return getSummaryById(id)
}));

router.get('/history/user/summary', defineEventHandler(async (event) => {
    return getHistory(event)
}));

export default useBase('/api/transcriptions', router.handler)