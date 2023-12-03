import {AuthCookie, messageType, SocketResponse} from "./types"

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

export function deleteAuthCookie() {
    const cookie = useCookie('auth')
    cookie.value = null
}

const decoder = new TextDecoder()

export async function readStream(reader: ReadableStreamDefaultReader | null, callback: Function | null = null) {
    if (!reader) return null
    const {done, value} = await reader.read()

    if (done) return

    const text = decoder.decode(value)

    if (callback) callback(text)

    return readStream(reader, callback)
}

export class Socket {
    private socket: WebSocket | null = null
    private readonly userId: string = ""
    private readonly url: string = ""

    constructor(userId: string) {
        this.url = `ws://${window.location.hostname}:8080`
        this.userId = userId
        this.setup()
    }

    sendIdentity() {
        this.send({
            type: messageType.IDENTITY,
            data: this.userId
        })
    }

    setup() {
        this.socket = new WebSocket(this.url)
        this.onMessage()
    }

    onMessage(callback: Function | null = null) {
        if (!this.socket) return

        this.socket.onmessage = (message: MessageEvent) => {
            const data = JSON.parse(message.data) as SocketResponse
            switch (data.type) {
                case messageType.IDENTITY:
                    this.sendIdentity()
                    break
                case messageType.ERROR:
                    console.error(data.data)
                    break
                default:
                    break
            }

            if (callback) callback(data)
        }
    }

    send(data: any) {
        if (!this.socket) return
        this.socket.send(JSON.stringify(data))
    }
}