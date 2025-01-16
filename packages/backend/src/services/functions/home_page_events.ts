import { getdata, putdata, updatedata } from "@backend/store/db";
import { Md5 } from "ts-md5"
import nodemailer from 'nodemailer';
import "@shared/index"

async function login(email: string, password: string) {
    const key = EMAIL_KEY + email;
    const userData = await getdata(key);
    if (userData && userData.password === Md5.hashStr(password)) {
        return true;
    }
    return false;
}

async function changePassword(email: string, oldPassword: string, newPassword: string) {
    const key = USER_KEY + email;
    const userData = await getdata(key);
    if (userData && userData.password === oldPassword) {
        await updatedata(key, { key: "password", value: newPassword });
        return true;
    }
    return false;
}

async function register(email: string, password: string) {
    const key = EMAIL_KEY + email;
    const userData = await getdata(key);
    if (userData) {
        return false;
    }
    if (await putdata(key, Md5.hashStr(password)) !== OK) {
        return false;
    };
    return true;
}

const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

async function sendCode(email: string, code: string) {
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: '验证码',
        text: `您的验证码为：${code},5分钟内有效。`,
    };
    return await transporter.sendMail(mailOptions);
};
export { login, changePassword, register, sendCode };