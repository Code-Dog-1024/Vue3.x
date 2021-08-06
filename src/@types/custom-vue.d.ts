import api from "@/api";

export type Api = typeof api;

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $api: Api;
  }
}
