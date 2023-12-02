import { createRouter, defineEventHandler } from 'h3'
import { storeUploadedFile, provideTranscript, provideSummary } from './methods'


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

export default useBase('/api/transcriptions', router.handler)