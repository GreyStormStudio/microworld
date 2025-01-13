import { getdata, putdata, updatedata } from "@backend/store/db";
import "@shared/index"

async function login(email: string, password: string) {
    const key = EMAIL_KEY + email;
    const userData = await getdata(key);
    if (userData && userData.password === password) {
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
    if (await putdata({ email, password }, key) !== OK) {
        return false;
    };
    return true;
}

export { login, changePassword, register };