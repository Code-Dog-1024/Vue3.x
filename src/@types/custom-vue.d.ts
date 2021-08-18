import api from "@/api";

import { Store } from "vuex";
import { StoreState } from "@/store/custom-vuex.d";

type Api = typeof api;

interface $api extends Api {}

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $api: $api;
    $store: Store<StoreState>;
  }
}
