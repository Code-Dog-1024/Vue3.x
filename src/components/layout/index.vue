<template>
  <div class="app-wrapper">
    <app-aside class="app-wrapper_aside"></app-aside>
    <div class="app-wrapper_main">
      <app-header></app-header>
      <router-view></router-view>
      <app-footer></app-footer>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
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
});
</script>

<style rel="stylesheet/scss" lang="scss">
.app-wrapper {
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  position: relative;

  &_aside {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
  }

  &_main {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    margin-left: $asideOnWidth;
  }
}
</style>
