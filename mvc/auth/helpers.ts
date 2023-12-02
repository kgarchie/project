import {createHash} from "node:crypto"
import { sendMail } from "../utils";

export function hashData(plaintext: string): string {
    return createHash('sha256').update(plaintext).digest('hex')
}

export function checkHash(plaintext: string | null, hash: string | null): boolean {
    if (!plaintext || !hash) return false
    return hashData(plaintext) === hash
}


export async function mailResetPasswordLink(email: string, token: string, origin: string, path:string, user_id: string) {
    path = path.replace(/^\/|\/$/g, '');
    const link = `${origin}/${path}?user_id=${user_id}&token=${token}`;

    const message = "Click the link below to reset your password\n\n" + link;
    const options = {
        to: email,
        subject: "Reset your password",
        text: message,
        html: passwordReserHtml(link)
    }

    console.log(message)

    return await sendMail(options)
}


export function passwordReserHtml(link: any) {
    const html = `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Reset Password</title>
    </head>
    <style>
        .email-content {
            font-family: sans-serif;
            text-align: center;
            background-color: #f2f2f2;
            padding: 50px;
        }
    
        .email-container {
            background-color: #fff;
            width: 50%;
            margin: auto;
            padding: 50px;
        }
    
        .email-header {
            border-bottom: 1px solid #f2f2f2;
            padding-bottom: 30px;
        }
    
        .email-header h1 {
            font-weight: 300;
        }
    
        .email-body {
            padding-top: 30px;
            padding-bottom: 30px;
        }
    
        .email-footer {
            border-top: 1px solid #f2f2f2;
            padding-top: 30px;
        }
    
        .email-footer p {
            font-size: 14px;
            font-weight: 300;
        }
    </style>
    <body>
    <div class="email-content">
        <div class="email-container">
            <div class="email-header">
                <h1>Password Reset</h1>
            </div>
            <div class="email-body">
                <p>Hi there, you can reset your password by clicking this <strong><a href="${link}">link</a></strong>.
                </p>
                <p>
                    If you did not ask for this email, you can safely ignore this prompt.
                </p>
            </div>
            <div class="email-footer">
                <p>AlphaTech</p>
            </div>
        </div>
    </div>
    </body>
    
    </html>`
    return html.replace('${link}', link);
}