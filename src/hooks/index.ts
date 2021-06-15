import { ComponentInternalInstance, getCurrentInstance } from "vue";
import { Utils } from "@/@types/custom-vue";
import { Http } from "@/http";

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
