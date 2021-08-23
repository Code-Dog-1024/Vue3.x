import { Router } from 'vue-router';
import { Store } from 'vuex';
import { StoreState } from '@/store';
import { $api } from '@/lib/@types/custom-vue.d';

declare global {
  interface Window {
    router: Router;
    store: Store<StoreState>;
    api: $api;
  }
}
