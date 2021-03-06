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
        component: () => import('../views/NotFound')
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
        path: '/tests',
        name: 'tests',
        component: () => import('../views/tests')
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
        path: '/results_2',
        name: 'results_2',
        component: () => import('../views/results_2')
    },
    {
        path: '/results_3',
        name: 'results_3',
        component: () => import('../views/results_3')
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
        path: '/testing',
        name: 'testing',
        component: () => import('../views/testing')
    },
    {
        path: '/test-registration',
        name: 'test-registration',
        component: () => import('../views/test-registration')
    },
];

const router = new VueRouter({
    routes
});

export default router
