<template>
  <div class="app-aside" :class="isFold ? 'app-aside--off' : 'app-aside--on'">
    <router-link to="/" class="text-white">
      <transition name="el-zoom-in-center">
        <div class="app-aside-logo bg-primary" v-show="isFold">
          <img class="app-aside-logo-img" :src="logo" alt="logo" />
        </div>
      </transition>
      <transition name="el-zoom-in-center">
        <div v-show="!isFold" class="app-aside-logo flex bg-primary">
          <img class="app-aside-logo-img" :src="logo" alt="logo" />
          <span class="flex-1 flex-jc-ac" v-show="!isFold">
            {{ "公司名称" }}
          </span>
        </div>
      </transition>
    </router-link>
    <h2>Aside</h2>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";

export default defineComponent({
  name: "app-aside",
  props: {
    isFold: {
      type: Boolean,
      required: true,
    },
  },
  setup() {
    const logo = computed(() => {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const img = require("../../../../assert/images/logo.jpg");
      return img;
    });

    return {
      logo,
    };
  },
});
</script>

<style lang="scss" scoped>
.app-aside {
  height: 100%;
  min-height: 100%;

  &--on {
    width: $asideOnWidth;
  }

  &--off {
    width: $asideOffWidth;
  }

  &-logo {
    height: $logoHeight;

    &-img {
      height: 100%;
    }
  }
}
</style>
