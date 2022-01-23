import { createRouter, createWebHistory } from 'vue-router';

import HomePage from './pages/HomePage.vue';

import { defineAsyncComponent } from 'vue';

const NotFoundPage = defineAsyncComponent(() => import('./pages/NotFoundPage.vue'));

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: HomePage },
    { path: '/:notFound(.*)', component:  NotFoundPage},
  ],
});
