<template>
  <div class="aside">
    <h2>Aside</h2>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AppAside",
});
</script>

<style rel="stylesheet/scss" lang="scss">
.aside {
  width: $asideOnWidth;
  height: 100%;
  min-height: 100%;
}
</style>
