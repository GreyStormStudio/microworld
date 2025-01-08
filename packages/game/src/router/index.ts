import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
//初始界面(啥都没有)
import Index from '../App.vue'
import Home from '../components/home.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: '',
        component: Index
    },
    {
        path: '/',
        name: 'home',
        component: Home
    }

]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})

export default router
