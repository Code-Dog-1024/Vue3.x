import { RouteLocationNormalized, RouteLocationRaw } from 'vue-router';

import store from '@/store';
import _Storage from '@/lib/utils/storage';

const { userRoutes } = store.state.userModules;

export function beforeEach(to: RouteLocationNormalized): RouteLocationRaw | boolean {
  const { path } = to;

  const isLogin = !!(_Storage.get('TOKEN') || null);
  const isLoginPath = path === '/login';
  const isErrorPath = path === '/401' || path === '/404';
  const isRootPath = path === '/';
  const belongModule = path.split('/')[1];

  /** 未登录跳转至登录页 */
  if (!isLogin && !isLoginPath) return '/login';

  if (userRoutes.has(path)) return true;

  /** 直接进入 */
  if (isLoginPath || isErrorPath || isRootPath) return true;

  return '/404';
}
