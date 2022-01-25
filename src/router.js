import { createRouter, createWebHistory } from 'vue-router';

import HomePage from './pages/HomePage.vue';
import CategoryPage from './pages/CategoryPage.vue';

import { defineAsyncComponent } from 'vue';

const NotFoundPage = defineAsyncComponent(() => import('./pages/NotFoundPage.vue'));

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: HomePage },
    { path: '/category/', redirect: '/category/headphones' },
    { path: '/category/:categoryName', component: CategoryPage },
    { path: '/:notFound(.*)', component: NotFoundPage },
  ],
});
