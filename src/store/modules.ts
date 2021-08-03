interface Module {
  /** 模块标识 */
  id: string;
  /** 模块名 */
  name: string;
  /** 子模块列表 */
  children: Module[];
}

interface State {
  /** 当前用户拥有访问权限的模块列表 */
  modules: Module[];
  /** 当前访问模块的子模块列表 */
  menus: Module[];
}

const initState: State = {
  modules: [],
  menus: [],
};

export default {
  state: initState,
  mutations: {
    /** 初始化用户可访问模块配置 */
    INIT_USER_MODULES(state: State): void {
      state.modules = [];
      state.menus = [];
    },
    /** 设置用户可访问模块列表 */
    SET_USER_MODULES(state: State, modules: Module[]): void {
      state.modules = modules;
    },
    /** 设置用户当前访问模块的子模块列表 */
    SET_ACTIVE_MODULE(state: State, menus: Module[]): void {
      state.menus = menus;
    },
  },
  action: {},
  getter: {
    modules(state: State): Module[] {
      return state.modules;
    },
    menus(state: State): Module[] {
      return state.menus;
    },
  },
};
