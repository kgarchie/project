import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
})

export async function sendMail(mailDetails: nodemailer.SendMailOptions) {
    try {
        return await transporter.sendMail(mailDetails);
    } catch (e) {
        console.log(e);
        return e;
    }
}