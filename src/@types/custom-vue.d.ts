import utils from "@/utils";
import { Http } from "@/http";

export type Utils = typeof utils;

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $utils: Utils;
    $http: Http;
  }
}
