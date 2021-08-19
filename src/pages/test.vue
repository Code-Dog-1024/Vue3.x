<template>
  <div class="flex">
    <div class="flex-2">{{ num }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useUtils } from '@/hooks';

export default defineComponent({
  name: 'test',
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  setup() {
    const num = ref('1123');
    num.value = useUtils().formatNumber(num.value);
    return {
      num,
    };
  },
});
</script>

<style lang="scss" scoped></style>
