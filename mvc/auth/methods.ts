import { H3Event } from "h3";
import { AuthCookie, HttpResponse, LoginData, RegisterData } from "~/types";
import { authenticate, createToken, createUser, getUser, getUserByEmail, invalidateToken, invalidateTokens, updatePassword } from "./queries"
import { mailResetPasswordLink } from "./helpers";

export async function login(event: H3Event) {
    const data = await readBody(event) as LoginData
    const response = {} as HttpResponse

    const user = await authenticate(data.email, data.password).catch((err) => {
        console.error(err)
        return err as Error
    })

    if (user instanceof Error) {
        response.status = 500
        response.body = user.message || "Internal server error"
        return response
    }

    if (!user) {
        response.status = 401
        response.body = "Invalid credentials"
        return response
    }

    response.status = 200
    response.body = user
    return response
}

export async function logout(event: H3Event) {
    const response = {} as HttpResponse
    const token = JSON.parse(getCookie(event, "auth") || "{}") as AuthCookie
    const invalidate = await invalidateToken(token.userId, token.token).catch((err) => {
        console.error(err)
        return err as Error
    })

    if (invalidate instanceof Error) {
        response.status = 500
        response.body = invalidate.message || "Internal server error"
        return response
    }

    response.status = 200
    response.body = "OK"
    return response
}

export async function register(event: H3Event) {
    const data = await readBody(event) as RegisterData
    const response = {} as HttpResponse

    if(!data.username || data.username === "") data.username = data.email.split("@")[0]

    const user = await createUser(data.email, data.password, data.username).catch((err) => {
        console.error(err)
        return err as Error
    })

    if (user instanceof Error) {
        response.status = 500
        response.body = user.message || "Internal server error"
        return response
    }

    const auth = await authenticate(data.email, data.password).catch((err) => {
        console.error(err)
        return err as Error
    })

    if (auth instanceof Error) {
        response.status = 500
        response.body = auth.message || "Internal server error"
        return response
    }

    response.status = 200
    response.body = auth
    return response
}

export async function reset(event: H3Event) {
    const {email, origin, path} = await readBody(event)
    const response = {} as HttpResponse

    const user = await getUserByEmail(email).catch((err) => {
        console.error(err)
        return err as Error
    })

    if (user instanceof Error) {
        response.status = 500
        response.body = user.message || "Internal server error"
        return response
    }

    if (!user) {
        response.status = 404
        response.body = "User not found"
        return response
    }

    const invalidate = await invalidateTokens(user.user_id).catch((err) => {
        console.error(err)
        return err as Error
    })

    if (invalidate instanceof Error) {
        response.status = 500
        response.body = invalidate.message || "Internal server error"
        return response
    }

    const token = await createToken(user.user_id).catch((err) => {
        console.error(err)
        return err as Error
    })

    if (token instanceof Error) {
        response.status = 500
        response.body = token.message || "Internal server error"
        return response
    }

    const sendResetLink = await mailResetPasswordLink(email, token.token, origin, path, user.user_id).catch((err) => {
        console.error(err)
        return err as Error
    })

    if (sendResetLink instanceof Error) {
        response.status = 500
        response.body = sendResetLink.message || "Internal server error"
        return response
    }

    response.status = 200
    response.body = "OK"
    return response
}

export async function update(event: H3Event) {
    const {user_id, password} = await readBody(event)
    const response = {} as HttpResponse

    const update = updatePassword(user_id, password).catch((err) => {
        console.error(err)
        return err as Error
    })

    if (update instanceof Error) {
        response.status = 500
        response.body = update.message || "Internal server error"
        return response
    }

    const auth = await authenticate(await getUser(user_id).then(data => data?.email || null), password).catch((err) => {
        console.error(err)
        return err as Error
    })

    if (auth instanceof Error) {
        response.status = 500
        response.body = auth.message || "Internal server error"
        return response
    }

    response.status = 200
    response.body = auth
    return response
}