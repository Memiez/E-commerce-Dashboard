import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import DashboardView from '../views/DashboardView.vue';
import OrdersView from '../views/OrdersView.vue';
import ProductsView from '../views/ProductsView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Dashboard',
    component: DashboardView,
  },
  {
    path: '/orders',
    name: 'Orders',
    component: OrdersView,
  },
  {
    path: '/products',
    name: 'Products',
    component: ProductsView,
  },
  // สามารถเพิ่มเส้นทางเพิ่มเติมตามที่ต้องการ
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
