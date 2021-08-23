import { RouteLocationNormalized, RouteLocationRaw } from 'vue-router';
import register from './register';

import store from '@/store';
import _Storage from '@/lib/utils/storage';

const { userRoutes } = store.state.userModules;

export async function beforeEach(to: RouteLocationNormalized): Promise<RouteLocationRaw | boolean> {
  const { path } = to;

  const isLogin = !!(_Storage.get('TOKEN') || null);
  const isLoginPath = path === '/login';
  const isErrorPath = path === '/401' || path === '/404';
  const isRootPath = path === '/';
  const belongModule = path.split('/')[1];

  /** 未登录跳转至登录页 */
  if (!isLogin && !isLoginPath) return '/login';

  /** 直接进入 */
  if (isLoginPath || isErrorPath || isRootPath) return true;

  /** 模块未加载,同步加载模块 */
  if (!register.modules.has(belongModule)) {
    await register.set(belongModule);
  }

  if (userRoutes.has(path)) return true;

  return '/404';
}
