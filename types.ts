import { ChatCompletionMessageParam } from "openai/src/resources/chat/completions";

export type HttpResponse = {
    body: any
    status: number
}

export type GPTChat = {
    model: "gpt-3.5-turbo";
    messages: ChatCompletionMessageParam[];
}


export enum statusCodes {
    startedStream = 201,
    processing = 202,
    mp3conversionUpdate = 203,
    mp3conversionEnd = 207,
    transcriptionUpdate = 204,
    /**
     * @deprecated
     */
    transcriptionSuccess = 205,
    summaryUpdate = 206,
    summaryError = 505,

    meetingCreated = 220,
    joinedMeeting = 221,
    newUserSdp = 222,
    membersSdp = 223,
    meetingNotFound = 204,
    mp3conversionError = 506,
    transcriptionError = 507,
    fatalError = 500
}

export const allowedAPIInterval = 1000 * 3 // 3 seconds

export type AuthCookie = {
    token: string,
    userId: string
}

export type LoginData = {
    email: string,
    password: string
}

export type RegisterData = {
    email: string,
    password: string,
    username: string
}

export type User = {
    user_id: string;
    email: string;
    name: string;
}

export enum messageType{
    JOIN_MEETING,
    LEAVE_MEETING,
    CREATE_MEETING,
    DELETE_MEETING,
    MESSAGE,
    ERROR,

    SDP_OFFER,
    SDP_ANSWER,
    ICE_CANDIDATE,
    IDENTITY
}

export type SocketResponse = {
    type: messageType,
    data: any
}