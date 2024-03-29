<template>
  <div class="app-aside" :class="isFold ? 'app-aside--off' : 'app-aside--on'">
    <router-link to="/" class="app-aside-link text-white">
      <transition name="el-zoom-in-center">
        <div class="app-aside-logo bg-primary" v-show="isFold">
          <img class="app-aside-logo-img" :src="logo" alt="logo" />
        </div>
      </transition>
      <transition name="el-zoom-in-center">
        <div v-show="!isFold" class="app-aside-logo flex bg-primary">
          <img class="app-aside-logo-img" :src="logo" alt="logo" />
          <span class="flex-1 flex-jc-ac font-20" v-show="!isFold">
            {{ companyName }}
          </span>
        </div>
      </transition>
    </router-link>

    <el-menu unique-opened router :collapse="isFold">
      <el-submenu v-for="menu in menus" :key="menu.id" :index="menu.id">
        <template #title>
          <i class="el-icon-location"></i>
          <span>{{ menu.name }}</span>
        </template>
        <el-menu-item
          v-for="child in menu.children"
          :key="child.id"
          :index="child.route"
          :disabled="!child.route"
          class="app-aside-text"
        >
          {{ child.name }}
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useLogoConfig, useMenus } from './hooks';

export default defineComponent({
  name: 'app-aside',
  props: {
    isFold: {
      type: Boolean,
      required: true,
    },
  },
  setup() {
    const { logo, companyName } = useLogoConfig();

    const { menus } = useMenus();

    return {
      logo,
      companyName,
      menus,
    };
  },
});
</script>

<style lang="scss" scoped>
.app-aside {
  height: 100%;
  min-height: 100%;

  &--on {
    width: $asideOnWidth;
  }

  &--off {
    width: $asideOffWidth;
  }

  &-link {
    display: inline-block;
    width: 100%;
    height: $logoHeight;
    overflow: hidden;
  }

  &-logo {
    display: flex;
    align-items: center;

    &-img {
      height: $logoHeight;
    }
  }

  &-text {
    text-indent: 2em;
  }
}

.el-menu--collapse {
  width: $asideOffWidth;
}
</style>
