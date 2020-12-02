import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import AgGridVueDemo from '@/Pages/AgGridVueDemo/AgGridVueDemo.vue';

// const CatalogManagement = () => import(/* webpackChunkName: "app.lazy.run-management" */'@/Pages/CatalogAdmin/CatalogManagement.vue');

Vue.use(VueRouter);

const routes: RouteConfig[] = [
    {
        path: '/',
        name: 'ag-grid-demo',
        component: AgGridVueDemo,
        meta: { title: 'AgGridDemo' },
    },
];

export default new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes,
});
