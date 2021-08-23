<template>
  <h2>登录</h2>
  <el-button type="primary" @click="onLogin">点我登陆</el-button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useStore, useUtils } from '@/hooks';
import { useRouter } from 'vue-router';

/** mock数据 */
import { userModules } from '@/mock';

export default defineComponent({
  name: 'login',
  setup() {
    const store = useStore();
    const utils = useUtils();
    const router = useRouter();

    const onLogin = () => {
      store.commit('SET_USER_MODULES', userModules);
      utils._Storage.set('TOKEN', 'USER_TOKEN');
      router.replace('/');
    };

    return {
      onLogin,
    };
  },
});
</script>

<style lang="scss" scoped></style>
