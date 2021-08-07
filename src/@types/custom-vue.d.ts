import { Store } from "vuex";
import api from "@/api";
import { StoreState } from "@/store/custom-vuex.d";

type Api = typeof api;

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $api: Api;
    $store: Store<StoreState>;
  }
}
