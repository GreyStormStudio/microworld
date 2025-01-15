import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
//初始界面(啥都没有)
import Index from '../App.vue'
import Login from '../components/HomePage/login.vue'
import Register from '../components/HomePage/register.vue'
import Forget from '../components/HomePage/forget.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: '',
        component: Index
    },
    {
        path: '/',
        name: 'home',
        children: [
            {
                path: '/login',
                name: 'login',
                component: Login
            },
            {
                path: '/register',
                name: 'register',
                component: Register
            },
            {
                path: '/forget',
                name: 'forget',
                component: Forget
            }
        ]
    }

]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})

export default router
