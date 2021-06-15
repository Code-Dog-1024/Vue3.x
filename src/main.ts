import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import utils from "./utils";

const vm = createApp(App);

vm.config.globalProperties.$utils = utils;

vm.use(store).use(router).mount("#app");
