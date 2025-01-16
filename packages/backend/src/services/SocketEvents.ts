import { Server } from "socket.io";
import * as events from "./functions/home_page_events"

class SocketEvents {
    private io: Server;
    constructor(io: Server) {
        this.io = io;
    }
    initializeEvents() {
        this.io.on("connection", (socket) => {//建立连接
            //#region 首页事件
            socket.once('login', async (username: string, password: string) => {//登录事件
                const result = await events.login(username, password)
                if (result) {
                    socket.emit('login_response', { success: true })
                } else {
                    socket.emit('login_response', { success: false })
                }
            })
            socket.once('send_code', (email: string) => {//发送验证码事件
                const code = events.sendCode(email, Math.floor(Math.random() * 10000).toString())//生成四位随机验证码
                /*code应该存起来，但是我不知道怎么做...*/
                socket.emit('send_code_response', { success: true })
            })
            socket.once('register', async (email: string, password: string, code: string) => {//注册事件
                if (await events.register(email, password)) {
                    socket.emit('register_response', { success: true })
                }
                socket.emit('register_response', { success: false })
            })
            socket.once('forgot_password', (email: string, new_password: string) => {//忘记密码事件
                socket.emit('forgot_password_response', { success: true })
            })
            //#endregion
            
            //#region 房间事件
            //#endregion
            socket.on("disconnect", () => {//断开连接
                console.log("Client disconnected");
            });
        });
    }
}
export default SocketEvents;