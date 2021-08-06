import { Router } from "vue-router";
import { Store } from "vuex";

declare global {
  interface Window {
    router: Router;
    store: Store;
  }
}
