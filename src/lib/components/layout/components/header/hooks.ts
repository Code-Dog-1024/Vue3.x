import { ref } from "vue";
import { useStore } from "@/hooks";

/** 获取用户可访问模块 */
export function userModules() {
  const store = useStore();

  const activeId = ref("");
  const modules = store.state.userModules.userModules;

  const onActiveModuleChange = (id: string) => {
    activeId.value = id;
    store.commit(
      "SET_ACTIVE_MODULE",
      modules.find((item) => item.id === id)?.children || []
    );
  };

  return {
    modules,
    activeId,
    onActiveModuleChange,
  };
}
