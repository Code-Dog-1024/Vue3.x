<template>
  <div>
    <div>{{ num }}</div>
    <el-button @click="onClick">点我改名</el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useUtils } from "@/hooks";
import { ElButton } from "element-plus";

export default defineComponent({
  name: "HelloWorld",
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  components: {
    ElButton,
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
