import { RouteLocationNormalized, RouteLocationRaw } from 'vue-router';

import store from '@/store';

const userRoutes = store.state.userModules.userRoutes;

const isLogin = (route: string): boolean => route === '/login';
const isError = (route: string): boolean => route === '/401' || route === '/404';

export function beforeEach(to: RouteLocationNormalized): RouteLocationRaw | boolean {
  const { path } = to;
  if (userRoutes.has(path)) return true;
  return '/404';
}
