import { defineEventHandler } from "h3";
import { login, logout, register, reset, update } from "./methods";
import { getUser } from "./queries";
import { AuthCookie, HttpResponse, User } from "~/types";

const router = createRouter()

router.post("/login", defineEventHandler(event => {
    return login(event)
}))

router.post("/logout", defineEventHandler(event => {
    return logout(event)
}))

router.post("/register", defineEventHandler(event => {
    return register(event)
}))

router.post("/reset", defineEventHandler(event => {
    return reset(event)
}))

router.post("/update", defineEventHandler(event => {
    return update(event)
}))

router.get("/identity", defineEventHandler(event => {
    const authCookie = JSON.parse(getCookie(event, "auth") || "{}") as AuthCookie

    if (!authCookie.userId) return event.node.res.writeHead(401).end()

    return getUser(authCookie.userId).then(user => {
        if (!user) return event.node.res.writeHead(401).end()

        return {
            status: 200,
            body: {
                user_id: user.user_id,
                name: user.name,
                email: user.email
            } as User
        } as HttpResponse
    }).catch(err => {
        console.error(err)
        return event.node.res.writeHead(500).end()
    })
}))

export default useBase("/api/auth", router.handler)