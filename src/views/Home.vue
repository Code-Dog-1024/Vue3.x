<template>
  <div class="home">This is home page.</div>
  <h2>{{ name }}</h2>
  <hello-world v-model="name"></hello-world>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import HelloWorld from "@/components/HelloWorld.vue";

export default defineComponent({
  name: "Home",
  components: {
    HelloWorld,
  },
  setup() {
    const name = ref("张三");
    return {
      name,
    };
  },
});
</script>
