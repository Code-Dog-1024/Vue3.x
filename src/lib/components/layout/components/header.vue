<template>
  <div class="app-header flex-ac bg-primary">
    <el-button type="primary" @click="changeFoldStatus">
      {{ isAsideFold ? "点我展开aside" : "点我折叠aside" }}
    </el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters } from "vuex";

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

    const modules = mapGetters(["modules"]);
    console.log(modules);

    return {
      changeFoldStatus,
    };
  },
});
</script>

<style lang="scss" scoped>
.app-header {
  height: $logoHeight;
}
</style>
