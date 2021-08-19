<template>
  <div class="app-header flex-ac bg-primary">
    <el-button type="primary" @click="changeFoldStatus">
      {{ isAsideFold ? '点我展开aside' : '点我折叠aside' }}
    </el-button>
    <div
      class="app-header-module flex-jc-ac"
      :class="activeId === item.id ? 'app-header-module-active' : ''"
      v-for="item in modules"
      :key="item.id"
      @click="onActiveModuleChange(item.id)"
    >
      {{ item.name }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import { userModules } from './hooks';

export default defineComponent({
  name: 'app-header',
  props: {
    isAsideFold: {
      type: Boolean,
      required: true,
    },
  },
  emits: ['update:isAsideFold'],
  setup(props, { emit }) {
    const changeFoldStatus = () => {
      emit('update:isAsideFold', !props.isAsideFold);
    };

    const { modules, activeId, onActiveModuleChange } = userModules();

    onMounted(() => {
      onActiveModuleChange(modules[0].id);
    });

    return {
      changeFoldStatus,
      modules,
      activeId,
      onActiveModuleChange,
    };
  },
});
</script>

<style lang="scss" scoped>
.app-header {
  height: $logoHeight;

  &-module {
    color: #fff;
    min-width: 100px;
    height: 100%;

    &-active {
      background-color: slateblue;
    }
  }
}
</style>
