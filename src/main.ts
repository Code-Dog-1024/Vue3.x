import { createApp } from "vue";
import App from "./App.vue";
import lib from "./lib";
import router from "./router";
import store from "./store";
import element from "element-plus";

import "element-plus/lib/theme-chalk/index.css";
import "@/stylesheets/index.scss";

const vm = createApp(App);

vm.use(lib).use(store).use(router).use(element).mount("#app");
