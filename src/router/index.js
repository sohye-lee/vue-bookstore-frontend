import { createRouter, createWebHistory } from 'vue-router';
import CartPage from '../views/CartPage.vue';
import ProductsPage from '../views/ProductsPage.vue';
import ProductDetailPage from '../views/ProductDetailPage.vue';
import NotFoundPage from '../views/NotFoundPage.vue';

const routes = [
  {
    path: '/products',
    name: 'Products',
    component: ProductsPage,
  },
  {
    path: '/products/:id',
    name: 'ProductDetail',
    component: ProductDetailPage,
  },
  {
    path: '/cart',
    name: 'Cart',
    component: CartPage,
  },
  {
    path: '/',
    redirect: '/products',
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: NotFoundPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
