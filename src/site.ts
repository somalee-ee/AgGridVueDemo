/* eslint-disable import/no-extraneous-dependencies */
import 'babel-polyfill';
import Vue from 'vue';
import Application from '@/Application.vue';
import PageRouter from '@/page-router';
import vuetify from '@/Plugins/vuetify';

new Vue({
    router: PageRouter,
    vuetify,
    render: (h) => h(Application),
}).$mount('#app');
