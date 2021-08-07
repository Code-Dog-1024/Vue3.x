import { ActionContext, Module } from "vuex";
import $http from "@/lib/axios";
import $api from "@/api";
import { ListResponeseData } from "@/@types/basic.d";
import { RootState } from "./custom-vuex";

interface UserModule {
  /** 模块标识 */
  id: string;
  /** 模块名 */
  name: string;
  /** 子模块列表 */
  children?: UserModule[] | null;
}

export interface ModulesState {
  /** 当前用户拥有访问权限的模块列表 */
  userModules: UserModule[];
  /** 当前访问模块的子模块列表 */
  activeMenus: UserModule[];
}

const initState: ModulesState = {
  userModules: [
    {
      id: "1",
      name: "模块1",
    },
  ],
  activeMenus: [],
};

const userModules: Module<ModulesState, RootState> = {
  state: initState,
  mutations: {
    /** 初始化用户可访问模块配置 */
    INIT_USER_MODULES(state: ModulesState): void {
      state.userModules = [];
      state.activeMenus = [];
    },
    /** 设置用户可访问模块列表 */
    SET_USER_MODULES(state: ModulesState, modules: UserModule[]): void {
      state.userModules = modules;
    },
    /** 设置用户当前访问模块的子模块列表 */
    SET_ACTIVE_MODULE(state: ModulesState, menus: UserModule[]): void {
      state.activeMenus = menus;
    },
  },
  actions: {
    /** 获取用户可访问模块列表 */
    GET_USER_MODULES(
      context: ActionContext<ModulesState, any>
    ): Promise<UserModule[]> {
      return new Promise((resolve, reject) => {
        try {
          $http.post($api.common.modules).then((res) => {
            const { data } = res;
            const { content } = data as ListResponeseData<UserModule>;
            if (content.length) {
              context.commit("SET_USER_MODULES", content);
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
    userModules(state: ModulesState): UserModule[] {
      return state.userModules;
    },
    activeMenus(state: ModulesState): UserModule[] {
      return state.activeMenus;
    },
  },
};

export default userModules;
