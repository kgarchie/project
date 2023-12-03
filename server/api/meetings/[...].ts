import meetingsController from '~/mvc/meetings/controller'

export default defineEventHandler((event) => {
    meetingsController(event)
})