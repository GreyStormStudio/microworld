import { Server } from "socket.io";

class SocketEvents {
    private io: Server;
    constructor(io: Server) {
        this.io = io;
    }
    initializeEvents() {
        this.io.on("connection", (socket) => {//建立连接
            socket.once('login', (username: string, password: string) => {//登录事件
                socket.emit('login_response', { success: true })
            })
            socket.once('send_code', (email: string) => {//发送验证码事件)
                socket.emit('send_code_response', { success: true })
            })
            socket.once('register', (username: string, password: string, email: string) => {//注册事件
                socket.emit('register_response', { success: true })
            })
            socket.once('forgot_password', (email: string, new_password: string) => {//忘记密码事件
                socket.emit('forgot_password_response', { success: true })
            })
            socket.on("disconnect", () => {//断开连接
                console.log("Client disconnected");
            });
        });
    }
}
export default SocketEvents;