<template>
    <div class="register-container">
        <h1>Register</h1>
        <form class="register">
            <div>
                <label for="email">邮箱:</label>
                <input type="text" id="email" v-model="email" required>
            </div>
            <div><label for="password">密码:</label>
                <input type="password" id="password" v-model="password" required>
            </div>
            <div><label for="confirm-password">确认密码:</label>
                <input type="password" id="password" v-model="password" required>
            </div>
            <div>
                <label for="code">验证码:</label>
                <input type="text" id="code" v-model="code" required>
                <button @click="get_code">获取验证码</button>
            </div>
            <div>
                <button @click="register">注册</button>
            </div>
            <p>已有账号? <router-link to="/login" class="link">登录</router-link></p>
        </form>
    </div>
</template>
<script>
export default {

}
</script>
<style scoped>
h1 {
    text-align: center;
}

.register-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -75%);
    width: 300px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    padding: 20px;
}

.register form {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.register input {
    margin-bottom: 10px;
    padding: 5px;
    border-radius: 5px;
    border: 1px solid #ccc;
}

.register button {
    padding: 5px 10px;
    border-radius: 5px;
    border: none;
    background-color: #4caf50;
    color: #fff;
    cursor: pointer;
    margin-top: 10px;
    margin-bottom: 10px;
    display: block;
    width: 100%;
}

.register button:hover {
    background-color: #3e8e41;
}
.link {
    text-decoration: none;
    color: #4caf50;
}
</style>