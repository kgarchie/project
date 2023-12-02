import { AuthCookie } from "./types"

export function setAuthCookie(data: AuthCookie) {
    const cookie = useCookie<AuthCookie>('auth')
    cookie.value = data
}

export function userIsAuthenticated() {
    const cookie = useCookie<AuthCookie>('auth')
    return !!cookie.value && cookie.value.token !== "" && cookie.value.userId !== ""
}

export function getAuthCookie() {
    const cookie = useCookie<AuthCookie>('auth')
    return cookie.value
}


export function deleteAuthCookie(){
    const cookie = useCookie('auth')
    cookie.value = null
}