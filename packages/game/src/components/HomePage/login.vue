<template>
    <div class="login-container">
        <h1>Login</h1>
        <form @submit.prevent="login" class="login">
            <div>
                <label for="username">账户:</label>
                <input type="text" id="username" v-model="username">
            </div>
            <div><label for="password">密码:</label>
                <input type="password" id="password" v-model="password">
            </div>
            <div>
                <input type="checkbox" id="remember-me">
                <label for="remember-me">记住我</label>
            </div>
            <div>
                <button type="submit">登录</button>
                <button @click="go_register">注册</button>
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
        },
        go_register() {
            this.$router.push('/register')
        }
    }
}
</script>
<style>
h1 {
    text-align: center;
}

.login {
    display: flex;
    flex-direction: column;
    align-items: center;
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
    margin-right: 10px;
    margin-top: 10px;
    padding: 5px 10px;
    border-radius: 5px;
    border: none;
    background-color: #4CAF50;
    color: white;
    cursor: pointer;
}

.login button:hover {
    background-color: #3e8e41;
}

#remember-me {
    margin-bottom: 10px;
}

.login-container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -100%);
    margin-top: 50px;
    width: 300px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    padding: 20px;
}
</style>