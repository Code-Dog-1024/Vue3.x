import { ref } from 'vue';
import { useStore, useUtils } from '@/hooks';

/** 获取用户可访问模块 */
export function userModules() {
  const store = useStore();
  const utils = useUtils();

  const cacheActiveModuleID = utils._Storage.get('ActiveModuleID');
  const activeId = ref(cacheActiveModuleID);
  const modules = store.state.userModules.userModules;

  const onActiveModuleChange = (id: string) => {
    activeId.value = id;
    store.commit('SET_ACTIVE_MODULE', modules.find((item) => item.id === id) || {});
  };

  return {
    modules,
    activeId,
    onActiveModuleChange,
  };
}
