<template>
  <div class="header">
    <el-button type="primary" @click="changeFoldStatus">
      {{ isAsideFold ? "点我展开aside" : "点我折叠aside" }}
    </el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "app-header",
  props: {
    isAsideFold: {
      type: Boolean,
      required: true,
    },
  },
  emits: ["update:isAsideFold"],
  setup(props, { emit }) {
    const changeFoldStatus = () => {
      emit("update:isAsideFold", !props.isAsideFold);
    };

    return {
      changeFoldStatus,
    };
  },
});
</script>

<style lang="scss" scoped></style>
