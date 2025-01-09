import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
//初始界面(啥都没有)
import Index from '../App.vue'
import Login from '../components/HomePage/login.vue'

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
            }
        ]
    }

]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})

export default router
