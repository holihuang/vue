import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: '/',
        component: () => import('@/components/layout/Index.vue'),
        children: [{
            path: '/a',
            component: () => import('@/components/a/index.vue')
        }, {
            path: '/b',
            component: () => import('@/components/b/Index.vue')
        }],
    }
]

export default createRouter({
    history: createWebHistory(),
    routes,
})