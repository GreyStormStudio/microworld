<template>
    <router-view></router-view>
</template>
<style></style>
<script lang="ts">
export default {
    created() {
        this.$router.push('/login');
    }
}
</script>