import { InjectionKey } from 'vue';
import { createStore, Store } from 'vuex';

import userModules, { ModulesState } from './userModules';

/**
 * 仅用于两处文件,用于为vuex提供TS支持
 * 1. @/@types/custom-vue.d.ts
 * 2. @/hooks/index.d.ts
 */
export interface StoreState {
  userModules: ModulesState;
}

export const key: InjectionKey<Store<StoreState>> = Symbol('vuex');

const store = createStore<StoreState>({
  modules: {
    userModules,
  },
});

export default store;
