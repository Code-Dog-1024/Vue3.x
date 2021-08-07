import { InjectionKey } from "vue";
import { createStore, Store } from "vuex";
import { RootState } from "./custom-vuex.d";

import modules from "./userModules";

export const key: InjectionKey<Store<RootState>> = Symbol("vuex");

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    modules,
  },
});
