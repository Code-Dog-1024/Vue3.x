import { computed } from "vue";
import { useUtils, useStore } from "@/hooks";

/** 获取站点相关信息 */
export function useLogoConfig() {
  const logo = computed(() => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const img = require("@/assets/images/logo.jpg");
    return img;
  });

  const companyName = computed(() => {
    const siteConfig = useUtils()._Storage.get("site-config");
    return siteConfig ? siteConfig.name : "";
  });

  return {
    logo,
    companyName,
  };
}

/** 获取menus */
export function useMenus() {
  const store = useStore();

  const menus = computed(() => store.state.modules.activeMenus);

  return {
    menus,
  };
}
