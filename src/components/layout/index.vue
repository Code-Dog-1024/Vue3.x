<template>
  <div class="app-wrapper">
    <app-aside
      class="app-wrapper-aside"
      :class="isFold ? 'app-wrapper-aside--off' : 'app-wrapper-aside--on'"
    ></app-aside>
    <div
      class="app-wrapper-main"
      :class="isFold ? 'app-wrapper-main--off' : 'app-wrapper-main--on'"
    >
      <app-header v-model:isAsideFold="isFold"></app-header>
      <router-view></router-view>
      <app-footer></app-footer>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import AppHeader from "./components/header.vue";
import AppAside from "./components/aside.vue";
import AppFooter from "./components/footer.vue";

export default defineComponent({
  name: "Layout",
  components: {
    AppHeader,
    AppAside,
    AppFooter,
  },
  setup() {
    const isFold = ref(false);

    return {
      isFold,
    };
  },
});
</script>

<style lang="scss" scoped>
.app-wrapper {
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  position: relative;

  &-aside {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;

    &--on {
      width: $asideOnWidth;
    }

    &--off {
      width: $asideOffWidth;
    }
  }

  &-main {
    display: flex;
    flex-direction: column;
    min-height: 100vh;

    &--on {
      margin-left: $asideOnWidth;
    }

    &--off {
      margin-left: $asideOffWidth;
    }
  }
}
</style>
