import { ref } from "vue";
import { useStore } from "@/hooks";

/** 获取用户可访问模块 */
export function userModules() {
  const store = useStore();

  const activeId = ref("");
  const modules = store.state.modules.userModules;

  const onActiveModuleChange = (id: string) => {
    activeId.value = id;
  };

  return {
    modules,
    activeId,
    onActiveModuleChange,
  };
}
