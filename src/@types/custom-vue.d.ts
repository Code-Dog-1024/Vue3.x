import { Store } from 'vuex';
import { StoreState } from '@/store/index';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $store: Store<StoreState>;
  }
}
