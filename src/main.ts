import { createApp } from 'vue';
import App from './App.vue';
import lib from './lib';
import router from './router';
import store, { key } from './store';
import element from 'element-plus';

import 'element-plus/lib/theme-chalk/index.css';
import '@/stylesheets/index.scss';

window.router = router;
window.store = store;

const vm = createApp(App);

vm.use(lib).use(store, key).use(router).use(element).mount('#app');
