import { createRouter, createWebHistory } from 'vue-router';

import HomePage from './pages/HomePage.vue';
import CategoryPage from './pages/CategoryPage.vue';
import ProductDetailPage from './pages/ProductDetailPage.vue';

import { defineAsyncComponent } from 'vue';

const NotFoundPage = defineAsyncComponent(() => import('./pages/NotFoundPage.vue'));

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: HomePage },
    { path: '/product-detail/:productName', component: ProductDetailPage, props: true },
    { path: '/category/', redirect: '/category/headphones' },
    { path: '/category/:categoryName', component: CategoryPage, props: true },
    { path: '/:notFound(.*)', component: NotFoundPage },
  ],
  scrollBehavior() {
    // always scroll to top
    return { top: 0 }
  },
});
