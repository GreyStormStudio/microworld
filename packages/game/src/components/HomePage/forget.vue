<template>
    <div class="forget-container">
        <h1>Forget Password</h1>
        <form class="forget">
            <div>
                <label for="email">邮箱:</label>
                <input type="email" id="email" v-model="email" required>
            </div>
            <div>
                <label for="password">新密码:</label>
                <input type="password" class="password" v-model="newPassword" required>
            </div>
            <div>
                <label for="confirm-password">确认新密码:</label>
                <input type="password" class="password" v-model="confirmPassword" required>
            </div>
            <div>
                <label for="code">验证码:</label>
                <input type="text" id="code" v-model="code" required>
            </div>
            <button type="button" @click="sendCode">发送验证码</button>
            <button type="button" @click="resetPassword">重置密码</button>
            <p>又想起来了? <router-link to="/login" class="link">登录</router-link></p>
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

.forget-container {
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

.forget form {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.forget input {
    margin-bottom: 10px;
    padding: 5px;
    border-radius: 5px;
    border: 1px solid #ccc;
}

.forget button {
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

.forget button:hover {
    background-color: #3e8e41;
}
.link {
    text-decoration: none;
    color: #4caf50;
}
</style>