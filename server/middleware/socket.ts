// import {WebSocket, WebSocketServer} from "ws";
// import {messageType, type SocketResponse} from "~/types";
//
// type Client = {
//     ws: WebSocket,
//     userId: string
// }
//
// type Meeting = {
//     meetingId: string,
//     hostId: string,
//     clients: Client[]
// }
//
// declare global {
//     var meetings: Meeting[];
//     var clients: Client[];
//     var wss: WebSocketServer;
// }
//
//
// export function removeClient(ws: WebSocket) {
//     global.meetings.forEach(meeting => {
//         meeting.clients = meeting.clients.filter(client => client.ws !== ws)
//     })
// }
//
// export async function socketSendData(ws: WebSocket, message: string, maxRetries = 5) {
//     setTimeout(() => {
//         ws.send(message, (err: any) => {
//             if (err) {
//                 if (maxRetries > 0) {
//                     console.log("Retrying to send message")
//                     socketSendData(ws, message, maxRetries - 1)
//                 } else {
//                     console.log("Could not send message, removing client and closing socket...")
//                     ws.close()
//                     removeClient(ws)
//                 }
//             }
//         })
//     }, 2000);
// }
//
// export default defineEventHandler((event) => {
//     // @ts-ignore
//     if (!global.meeetings) global.meetings = []
//     // @ts-ignore
//     if (!global.clients) global.clients = []
//
//     const socketServer = new WebSocketServer({host: "localhost", port: 8080});
//
//     socketServer.on("connection", (ws: WebSocket) => {
//         socketSendData(ws, JSON.stringify({
//             type: messageType.IDENTITY,
//             data: "Requesting identity"
//         } as SocketResponse)).then(() => console.log("Sent identity message"))
//
//         ws.on("message", (message: MessageEvent) => {
//             let SocketResponse: SocketResponse | null = null;
//
//             try {
//                 SocketResponse = JSON.parse(message.toString()) as SocketResponse || null;
//             } catch (e) {
//                 const response = {
//                     type: messageType.ERROR,
//                     data: "Invalid Json"
//                 } as SocketResponse
//
//                 socketSendData(ws, JSON.stringify(response)).then(() => console.log("Invalid Json"))
//                 return
//             }
//
//             if (!SocketResponse) return
//
//             switch (SocketResponse.type) {
//                 case messageType.IDENTITY:
//                     const userId = SocketResponse.data as string
//                     if (!userId) socketSendData(ws, JSON.stringify({
//                         type: messageType.ERROR,
//                         data: "Invalid userId"
//                     } as SocketResponse)).then(() => console.log("Invalid userId"))
//
//                     const client = {
//                         ws: ws,
//                         userId: userId
//                     } as Client
//
//                     global.clients.push(client)
//                     break;
//                 case messageType.JOIN_MEETING:
//                     const {meetingId, sdp} = SocketResponse.data as {
//                         meetingId: string,
//                         sdp: RTCSessionDescriptionInit
//                     }
//                     if (!meetingId) socketSendData(ws, JSON.stringify({
//                         type: messageType.ERROR,
//                         data: "Invalid meetingId"
//                     } as SocketResponse)).then(() => console.log("Invalid meetingId"))
//                     if (!sdp) socketSendData(ws, JSON.stringify({
//                         type: messageType.ERROR,
//                         data: "Invalid sdp"
//                     } as SocketResponse)).then(() => console.log("Invalid sdp"))
//
//                     const existingMeeting = global.meetings.find(meeting => meeting.meetingId === meetingId)
//                     if (!existingMeeting) socketSendData(ws, JSON.stringify({
//                         type: messageType.ERROR,
//                         data: "No such meeting"
//                     } as SocketResponse)).then(() => console.log("No such meeting"))
//
//                     if (!existingMeeting) return;
//                     existingMeeting.clients.push({
//                         ws: ws,
//                         userId: meetingId
//                     } as Client)
//
//                     existingMeeting.clients.forEach(client => {
//                         if (client.ws === ws) return;
//                         socketSendData(client.ws, JSON.stringify({
//                             type: messageType.JOIN_MEETING,
//                             data: sdp
//                         } as SocketResponse))
//                     })
//
//                     break;
//                 case messageType.CREATE_MEETING:
//                     const {newMeetingId, newSdp} = SocketResponse.data as {
//                         newMeetingId: string,
//                         newSdp: RTCSessionDescriptionInit
//                     }
//
//                     if (!newMeetingId) socketSendData(ws, JSON.stringify({
//                         type: messageType.ERROR,
//                         data: "Invalid meetingId"
//                     } as SocketResponse)).then(() => console.log("Invalid meetingId"))
//
//                     if (!newSdp) socketSendData(ws, JSON.stringify({
//                         type: messageType.ERROR,
//                         data: "Invalid sdp"
//                     } as SocketResponse)).then(() => console.log("Invalid sdp"))
//
//                     const newMeeting = {
//                         meetingId: newMeetingId,
//                         hostId: newMeetingId,
//                         clients: []
//                     } as Meeting
//
//                     global.meetings.push(newMeeting)
//
//                     const newClient = {
//                         ws: ws,
//                         userId: newMeetingId
//                     } as Client
//
//                     if(global.clients.find(client => client.userId === newMeetingId)) break;
//                     global.clients.push(newClient)
//                     break;
//             }
//         })
//
//         ws.on("close", () => {
//             removeClient(ws)
//         })
//     })
//
//     global.wss = socketServer;
// })