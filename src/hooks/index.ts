import { ComponentInternalInstance, getCurrentInstance } from "vue";

import { Utils } from "@/lib/@types/custom-vue.d";

import { Http } from "@/lib/axios";

import { Api } from "@/@types/custom-vue.d";

import { Store, useStore as useBasicStore } from "vuex";
import { key } from "@/store";
import { StoreState } from "@/store/index";

/** 仅在setup中可以使用 */
export function useUtils(): Utils {
  const { appContext } = getCurrentInstance() as ComponentInternalInstance;
  const globalProperties = appContext.config.globalProperties;
  return globalProperties.$utils;
}

/** 仅在setup中可以使用 */
export function useHttp(): Http {
  const { appContext } = getCurrentInstance() as ComponentInternalInstance;
  const globalProperties = appContext.config.globalProperties;
  return globalProperties.$http;
}

/** 仅在setup中可以使用 */
export function useApi(): Api {
  const { appContext } = getCurrentInstance() as ComponentInternalInstance;
  const globalProperties = appContext.config.globalProperties;
  return globalProperties.$api;
}

export function useStore(): Store<StoreState> {
  return useBasicStore<StoreState>(key);
}
