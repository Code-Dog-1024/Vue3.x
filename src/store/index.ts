import { Dictionary } from "@/@types/basic";
import { InjectionKey } from "vue";
import { createStore, Store } from "vuex";

import modules from "./userModules";

export const key: InjectionKey<Store<Dictionary>> = Symbol("vuex");

export default createStore<Dictionary>({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    modules,
  },
});
