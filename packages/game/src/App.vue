<template>
    <router-view></router-view>
</template>
<style></style>
<script>
export default {
    created() {
        this.$router.push('/home');
    }
}
</script>