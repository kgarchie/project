import prisma from "~/prisma/db";
import {AuthCookie} from "~/types";
import {hashData} from "./helpers";
import {v4 as uuid} from "uuid";
import {ulid} from "ulid";

export async function authenticate(email: string | null, password: string | null): Promise<AuthCookie | null> {
    if (!email || !password) return null
    const user = await prisma.user.findUnique({
        where: {
            email
        }
    })

    if (!user) return null

    if (user.password !== hashData(password)) return null

    const token = await createToken(user.user_id)

    return {
        token: token.token,
        userId: user.user_id
    } as AuthCookie
}

export async function createUser(email: string, password: string, username: string) {
    return prisma.user.create({
        data: {
            email,
            password: hashData(password),
            name: username,
            user_id: ulid()
        }
    })
}

export async function createToken(user_id: string) {
    return prisma.token.create({
        data: {
            token: uuid(),
            User: {
                connect: {
                    user_id: user_id
                }
            }
        }
    })
}

export async function invalidateToken(user_id: string, token: string) {
    await prisma.token.update({
        where: {
            token,
            User: {
                user_id
            }
        },
        data: {
            isValid: false
        }
    })
}

export async function validateToken(user_id: string, token: string) {
    const tokenData = await prisma.token.findUnique({
        where: {
            token,
            User: {
                user_id
            }
        }
    })

    if (!tokenData) return false

    return tokenData.isValid
}

export async function getUser(user_id: string) {
    const user = await prisma.user.findUnique({
        where: {
            user_id
        }
    })

    return user
}

export async function getUserByEmail(email: string) {
    const user = await prisma.user.findUnique({
        where: {
            email
        }
    })

    return user
}

export async function invalidateTokens(user_id: string) {
    await prisma.token.updateMany({
        where: {
            User: {
                user_id
            }
        },
        data: {
            isValid: false
        }
    })

    return true
}

export async function updatePassword(user_id: string, password: string) {
    await prisma.user.update({
        where: {
            user_id
        },
        data: {
            password: hashData(password)
        }
    })

    return true
}