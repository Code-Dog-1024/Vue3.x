import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import AppLayout from '@/lib/components/layout/index.vue';
import { beforeEach } from './guard';

const errorRoutes: RouteRecordRaw[] = [
  {
    path: '/401',
    name: '401',
    component: import(/* webpackChunkName: "error" */ '@/views/error/401.vue'),
  },
  {
    path: '/404',
    name: '404',
    component: import(/* webpackChunkName: "error" */ '@/views/error/404.vue'),
  },
];

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: '首页',
    component: AppLayout,
    children: [
      {
        path: '/',
        name: '首页',
        component: import(/* webpackChunkName: "home" */ '@/views/index.vue'),
      },
      {
        path: '/test',
        name: '测试页',
        component: import(/* webpackChunkName: "test" */ '@/pages/test.vue'),
      },
    ],
  },
  ...errorRoutes,
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach(beforeEach);

export default router;
