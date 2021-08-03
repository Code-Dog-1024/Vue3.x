import { ComponentInternalInstance, getCurrentInstance } from "vue";
import { Utils } from "@/lib/@types/custom-vue";
import { Http } from "@/lib/axios";

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
