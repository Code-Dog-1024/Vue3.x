import { Module } from 'vuex';
import $http from '@/lib/axios';
import $api from '@/lib/api';
import $utils from '@/lib/utils';
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
  /** 当前访问模块的模块标识 */
  activeModuleID: string;
  /** 当前访问模块的子模块列表 */
  activeMenus: UserModule[];
  /** 用户可访问路由集合 */
  userRoutes: Set<string>;
}

const initState: ModulesState = {
  userModules: [],
  activeModuleID: '',
  activeMenus: [],
  userRoutes: new Set(),
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
    /** 设置用户当前访问模块 */
    SET_ACTIVE_MODULE(state, module: UserModule): void {
      $utils._Storage.set('ActiveModuleID', module.id);
      state.activeModuleID = module.id;
      state.activeMenus = module.children || [];
    },
  },
  actions: {
    /** 获取用户可访问模块列表 */
    GET_USER_MODULES(context): Promise<UserModule[]> {
      return new Promise((resolve, reject) => {
        try {
          $http.post($api.common.modules).then((res) => {
            const { data } = res;
            const { content } = data as ListResponeseData<UserModule>;
            if (content.length) {
              context.commit('SET_USER_MODULES', content);
              const activeModuleID = $utils._Storage.get('ActiveModuleID');
              const activeModule = activeModuleID
                ? content.filter((v) => v.id === activeModuleID)[0]
                : content[0];
              context.commit('SET_ACTIVE_MODULE', activeModule);
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
