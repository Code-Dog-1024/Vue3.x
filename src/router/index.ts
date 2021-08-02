import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import AppLayout from "@/lib/components/layout/index.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "首页",
    component: AppLayout,
    children: [
      {
        path: "/",
        name: "首页",
        component: import(/* webpackChunkName: "home" */ "@/views/index.vue"),
      },
      {
        path: "/test",
        name: "测试页",
        component: import(/* webpackChunkName: "test" */ "@/pages/test.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
