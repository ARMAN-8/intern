import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '*',
        component: () => import(/* webpackChunkName: "about" */ '../views/NotFound')
    },
    {
        path: '/signIn',
        name: 'signIn',
        component: () => import('../views/signIn')
    },
    {
        path: '/registration',
        name: 'registration',
        component: () => import('../views/registration')
    },
    {
        path: '/forget_password',
        name: 'forget_password',
        component: () => import('../views/forget_password')
    },
    {
        path: '/verify_link',
        name: 'verify_link',
        component: () => import('../views/verify_link')
    },
    {
        path: '/block',
        name: 'Block',
        component: () => import(/* webpackChunkName: "about" */ '../views/Block')
    },
    {
        path: '/account-settings',
        name: 'account-settings',
        component: () => import('../views/account-settings')
    },
    {
        path: '/test',
        name: 'test',
        component: () => import('../views/test')
    },
    {
        path: '/results',
        name: 'results',
        component: () => import('../views/results')
    },
    {
        path: '/Completed',
        name: 'Completed',
        component: () => import('../views/Completed')
    },
    {
        path: '/video-lessons',
        name: 'videoLessons',
        component: () => import('../views/videoLessons')
    },
    {
        path: '/tariffs',
        name: 'tariffs',
        component: () => import('../views/tariffs')
    },
    {
        path: '/test-registration',
        name: 'test-registration',
        component: () => import('../views/test-registration')
    },
    {
        path: '/side-nav',
        name: 'side-nav',
        component: () => import('../views/side-nav')
    },
];

const router = new VueRouter({
    routes
});

export default router
