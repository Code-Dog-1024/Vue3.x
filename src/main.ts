import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import element from "element-plus";
import utils from "./utils";

import "element-plus/lib/theme-chalk/index.css";

const vm = createApp(App);

vm.config.globalProperties.$utils = utils;

vm.use(store).use(router).use(element).mount("#app");
