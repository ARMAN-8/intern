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
/*    {
        path: '/404',
        name: '404',
        component: 'NotFound',
    },*/
    /*{
        path: '*',
        redirect: '/404',
        component: 'NotFound',
    },*/
    {
        path: '/NotFound',
        name: 'NotFound',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/NotFound')
    },
    {
        path: '/block',
        name: 'Block',
        component: () => import(/* webpackChunkName: "about" */ '../views/Block.vue')
    },
];

const router = new VueRouter({
    routes
});

export default router
