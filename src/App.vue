<template>
  <div>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <layout></layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Layout from "@/components/layout/index.vue";

export default defineComponent({
  components: {
    Layout,
  },
});
</script>

<style lang="scss"></style>
