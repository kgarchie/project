import {Stream} from "~/helpers.server";
import {H3Event} from "h3";
import prisma from "~/prisma/db";
import {HttpResponse, statusCodes} from "~/types";

declare global {
    var meetings: Meeting[]
}

class Meeting {
    private meetingId: number | null = null
    private readonly host: string = ""
    private members: Array<{
        Stream: Stream,
        userId: string,
        sdp: RTCSessionDescription
    }> = []

    constructor(host: {
        userId: string,
        stream: Stream,
        userSdp: RTCSessionDescription
    }) {
        this.host = host.userId
        this.addMember(host.stream, host.userId, host.userSdp)
    }

    async init(details: {
        title: string,
        description: string,
        keywords: string,
        hostId: number
    }) {
        const result = await prisma.meeting.create({
            data: {
                title: details.title,
                description: details.description,
                keywords: details.keywords,
                hostId: details.hostId
            }
        }).catch(err => {
            throw new Error(err)
        })

        this.meetingId = result.id
    }

    addMember(stream: Stream, userId: string, sdp: RTCSessionDescription) {
        this.broadcastMessage(JSON.stringify({
            status: statusCodes.joinedMeeting,
            body: userId
        } as HttpResponse))

        this.broadcastMessage(JSON.stringify({
            status: statusCodes.newUserSdp,
            body: {
                userId: userId,
                sdp: sdp
            }
        } as HttpResponse))

        this.members.push({
            Stream: stream,
            userId: userId,
            sdp: sdp
        })

        this.shuttleMessage(JSON.stringify({
            status: statusCodes.membersSdp,
            body: this.members.map(member => {
                return {
                    userId: member.userId,
                    sdp: member.sdp
                }
            })
        } as HttpResponse), userId)
    }

    removeMember(userId: string) {
        this.members = this.members.filter(member => member.userId !== userId)
    }

    get attendants() {
        return this.members
    }

    get getId() {
        return this.meetingId
    }

    shuttleMessage(message: string, userId: string) {
        this.members.forEach(member => {
            if (member.userId !== userId) return
            member.Stream.write(message)
        })
    }

    broadcastMessage(message: string) {
        this.members.forEach(member => member.Stream.write(message))
    }
}

export async function publishMeeting(event: H3Event) {
    const stream = new Stream(event)
    const details = await readBody(event)
    const cookie = getCookie(event, 'auth')
    const response = {} as HttpResponse

    if (!cookie) {
        response.body = "You must be logged in to create a meeting"
        response.status = 401
        return response
    }

    const userId = JSON.parse(cookie).userId

    const meeting = new Meeting({
        userId,
        stream,
        userSdp: details.sdp
    })

    await meeting.init(details).catch(err => {
        stream.write(JSON.stringify({
            status: statusCodes.fatalError,
            body: err.message || err
        } as HttpResponse))
        stream.end()
    })

    global.meetings.push(meeting)

    stream.write(JSON.stringify({
        status: statusCodes.meetingCreated,
        body: meeting.getId
    } as HttpResponse))
}

export async function joinMeeting(event: H3Event) {
    const stream = new Stream(event)
    const details = await readBody(event)
    const cookie = getCookie(event, 'auth')
    const response = {} as HttpResponse

    if (!cookie) {
        response.body = "You must be logged in to join a meeting"
        response.status = 401
        return response
    }

    const userId = JSON.parse(cookie).userId

    const meeting = global.meetings.find(meeting => meeting.getId === details.meetingId)

    if (!meeting) {
        response.body = "Meeting not found"
        response.status = statusCodes.meetingNotFound
        return response
    }

    meeting.addMember(stream, userId, details.sdp)

    stream.write(JSON.stringify({
        status: statusCodes.startedStream,
        body: "Started stream"
    } as HttpResponse))
}
