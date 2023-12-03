import {defineEventHandler} from "h3";

const router = createRouter()

router.get("/new", defineEventHandler((event) =>{

}))

export default useBase('/api/meetings', router.handler)