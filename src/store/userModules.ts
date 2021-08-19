import { ActionContext, Module } from 'vuex';
import $http from '@/lib/axios';
import $api from '@/api';
import { Dictionary, ListResponeseData } from '@/@types/basic.d';
interface UserModule {
  /** 模块标识 */
  id: string;
  /** 模块名 */
  name: string;
  /** 模块图标 */
  icon?: string;
  /** 模块路由 */
  route?: string;
  /** 子模块列表 */
  children?: UserModule[] | null;
}

export interface ModulesState {
  /** 当前用户拥有访问权限的模块列表 */
  userModules: UserModule[];
  /** 当前访问模块的子模块列表 */
  activeMenus: UserModule[];
  /** 用户可访问路由集合 */
  userRoutes: Set<string>;
  /** 已动态加载的模块标识集合 */
  loadedModules: Set<string>;
}

const initState: ModulesState = {
  userModules: [],
  activeMenus: [],
  userRoutes: new Set(),
  loadedModules: new Set(),
};

const userModules: Module<ModulesState, Dictionary> = {
  state: initState,
  mutations: {
    /** 初始化用户可访问模块配置 */
    INIT_USER_MODULES(state): void {
      state.userModules = [];
      state.activeMenus = [];
    },
    /** 设置用户可访问模块列表 */
    SET_USER_MODULES(state, modules: UserModule[]): void {
      state.userModules = modules;
      const fn = (m: UserModule[]) => {
        m.forEach((i) => {
          if (i.route) {
            state.userRoutes.add(i.route);
          }
          if (i.children && i.children.length) {
            fn(i.children);
          }
        });
      };
      fn(modules);
    },
    /** 设置用户当前访问模块的子模块列表 */
    SET_ACTIVE_MODULE(state, menus: UserModule[]): void {
      state.activeMenus = menus;
    },
  },
  actions: {
    /** 获取用户可访问模块列表 */
    GET_USER_MODULES(context: ActionContext<ModulesState, any>): Promise<UserModule[]> {
      return new Promise((resolve, reject) => {
        try {
          $http.post($api.common.modules).then((res) => {
            const { data } = res;
            const { content } = data as ListResponeseData<UserModule>;
            if (content.length) {
              context.commit('SET_USER_MODULES', content);
              resolve(content);
            } else {
              reject();
            }
          });
        } catch (error) {
          reject(error);
        }
      });
    },
  },
  getters: {
    userModules(state): UserModule[] {
      return state.userModules;
    },
    activeMenus(state): UserModule[] {
      return state.activeMenus;
    },
  },
};

export default userModules;
