import { ComponentInternalInstance, getCurrentInstance } from "vue";
import { Utils } from "@/lib/@types/custom-vue.d";
import { Http } from "@/lib/axios";
import { Api } from "@/@types/custom-vue.d";

export function useUtils(): Utils {
  const { appContext } = getCurrentInstance() as ComponentInternalInstance;
  const globalProperties = appContext.config.globalProperties;
  return globalProperties.$utils;
}

export function useHttp(): Http {
  const { appContext } = getCurrentInstance() as ComponentInternalInstance;
  const globalProperties = appContext.config.globalProperties;
  return globalProperties.$http;
}

export function useApi(): Api {
  const { appContext } = getCurrentInstance() as ComponentInternalInstance;
  const globalProperties = appContext.config.globalProperties;
  return globalProperties.$api;
}
