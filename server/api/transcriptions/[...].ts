import transcriptionsController from '~/mvc/transcriptions/controller'

export default defineEventHandler(async (event) => {
    return transcriptionsController(event)
})