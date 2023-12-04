import prisma from "~/prisma/db";

export async function insertAudio(userId: string, title: string, key: string, path: string) {
    return prisma.meeting.create({
        data: {
            title: title,
            keywords: key,
            audio: path,
            User: {
                connect: {
                    id: +userId
                }
            }
        }
    }).catch(error => error as Error)
}
export async function getAudioById(id: string) {
    return prisma.meeting.findUnique({
        where: {
            id: +id
        }
    }).catch(error => error as Error)
}

export async function insertTranscript(userId: string, meetingId: string, path: string) {
    return prisma.meeting.update({
        where: {
            id: +meetingId
        },
        data: {
            transcript: path
        }
    }).catch(error => error as Error)
}

export async function insertSummary(userId: string, meetingId: string, path: string) {
    return prisma.meeting.update({
        where: {
            id: +meetingId
        },
        data: {
            summary: path
        }
    }).catch(error => error as Error)
}

export async function getTranscriptById(id: string) {
    return prisma.meeting.findUnique({
        where: {
            id: +id
        },
        select: {
            transcript: true
        }
    }).catch(error => error as Error)
}

export async function getSummaryById(id: string) {
    return prisma.meeting.findUnique({
        where: {
            id: +id
        },
        select: {
            summary: true
        }
    }).catch(error => error as Error)
}


export async function getHistoryByUserId(userId: string) {
    return prisma.meeting.findMany({
        where: {
            userId: +userId
        }
    }).catch(error => error as Error)
}

export async function getMeetingById(id: string) {
    return prisma.meeting.findUnique({
        where: {
            id: +id
        }
    }).catch(error => error as Error)
}