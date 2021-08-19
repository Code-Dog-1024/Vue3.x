import { App } from 'vue';

import AppLayout from './components/layout/index.vue';

import utils from './utils';
import axios from './axios';

const components = [
  {
    name: AppLayout.name,
    component: AppLayout,
  },
];

const install = (vm: App): void => {
  components.forEach((item) => {
    vm.component(item.name, item.component);
  });

  vm.config.globalProperties.$utils = utils;
  vm.config.globalProperties.$http = axios;
};

export default {
  install,
};
