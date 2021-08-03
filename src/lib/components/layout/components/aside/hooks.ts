import { computed, ComputedRef } from "vue";
import { useUtils } from "@/hooks";

/** 获取站点相关信息 */
export function useLogoConfig(): {
  logo: ComputedRef<any>;
  companyName: ComputedRef<any>;
} {
  const logo = computed(() => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const img = require("@/assert/images/logo.jpg");
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
