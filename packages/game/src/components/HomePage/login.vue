<template>
    <div class="login-container">
        <h1>Login</h1>
        <form class="login">
            <div>
                <label for="username">邮箱:</label>
                <input type="text" id="username" v-model="username" required>
            </div>
            <div><label for="password">密码:</label>
                <input type="password" id="password" v-model="password" required>
            </div>
            <div>
                <input type="checkbox" id="remember-me">
                <label for="remember-me">记住我</label>
            </div>
            <div>
                <button @click="login">登录</button>
                <p>还没有账号? <router-link to="/register" class="link">注册</router-link></p>
                <p>忘记密码? <router-link to="/forget" class="link">找回密码</router-link></p>
            </div>
        </form>
    </div>
</template>
<script>
export default {
    data() {
        return {
            username: '',
            password: ''
        };
    },
    methods: {
        login() {
            this.$socket.emit('login', { username: this.username, password: this.password });
            this.$socket.once('login_response', (response) => {
                if (response.success) {
                    this.$router.push('/game');
                } else {
                    alert('Invalid username or password');
                }
            });
        }
    }
}
</script>
<style>
h1 {
    text-align: center;
}

.login-container {
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

.login form {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.login input {
    margin-bottom: 10px;
    padding: 5px;
    border-radius: 5px;
    border: 1px solid #ccc;
}

.login button {
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

.login button:hover {
    background-color: #3e8e41;
}

#remember-me {
    margin-right: 5px;
}

.link {
    text-decoration: none;
    color: #4caf50;
}
</style>