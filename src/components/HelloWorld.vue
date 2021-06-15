<template>
  <div>
    <div>{{ num }}</div>
    <button @click="onClick">点我改名</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useUtils } from "@/hooks";

export default defineComponent({
  name: "HelloWorld",
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  emits: ["update:modelValue"],
  setup() {
    const num = ref("1123");
    num.value = useUtils().formatNumber(num.value);
    return {
      num,
    };
  },
  methods: {
    onClick() {
      this.$emit("update:modelValue", "李四");
    },
  },
});
</script>

<style lang="scss" scoped></style>
