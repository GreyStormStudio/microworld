<template>
    <div></div>
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
        },
        go_register() {
            this.$router.push('/register')
        }
    }
}
</script>