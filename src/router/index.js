import { createRouter, createWebHistory } from 'vue-router'
import catalog from '@/views/catalog.vue'
import productDetail from '@/views/productDetail.vue'
import cart from '@/views/cart.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Catalog',
      component: catalog,
    },
    {
      path: '/product/:id',
      name: 'ProductView',
      component: productDetail,
    },
    {
      path: '/cart',
      name: 'CartView',
      component: cart,
    },
  ],
})

export default router
