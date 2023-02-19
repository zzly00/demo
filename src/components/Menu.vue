<script setup lang="ts">
import { computed, defineProps } from 'vue';
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue';
import { MenuState } from '../interface';
import type { DeepReadonly } from 'vue';

interface Props {
  menuState: DeepReadonly<MenuState>;
}
const props = defineProps<Props>()

const menuCollapse = computed(() => props.menuState.menuCollapse);
const menuLists = computed(() => props.menuState.lists);

const getIcon = (icon: string = '') => {
  return new URL(`../assets/menu/${icon}.svg`, import.meta.url).href;
};
</script>

<template>
  <div>
    <el-menu
      default-active="2"
      class="el-menu-vertical"
      :collapse="menuCollapse"
      menu-trigger="click"
    >
      <el-sub-menu
        v-for="(item, index) in menuLists"
        :key="`firstLayer${index}`"
        :index="`firstLayer${index}`"
        popper-class="menu-popper"
        class="first-layer"
        collapse-close-icon="xxx"
      >
        <template #title>
          <el-icon>
            <img :src="getIcon(item.icon)" />
          </el-icon>
          <span>{{item.name}}</span>
        </template>
        <el-sub-menu
          v-for="(secondLayer, secondLayerIndex) in item.child"
          :key="`secondLayer${secondLayerIndex}`"
          :index="`secondLayer${secondLayerIndex}`"
          class="second-layer"
        >
          <template #title><span>{{secondLayer.name}}</span></template>
          <el-menu-item
            v-for="(thirdLayer, thirdLayerIndex) in secondLayer.child"
            :key="`thirdLayer${thirdLayerIndex}`"
            :index="`thirdLayer${thirdLayerIndex}`"
            class="third-layer"
          >
            {{thirdLayer.name}}
          </el-menu-item>
        </el-sub-menu>
      </el-sub-menu>
    </el-menu>
  </div>
</template>

<style scoped lang="scss">
$menu-base-level-padding: 26px;

:deep(.el-menu) {
  border-right: solid 1px #F2F2F7;
  background-color: #F2F2F7;
}
.el-menu-vertical:not(.el-menu--collapse) {
  width: 294px;
}
.el-menu--collapse {
  width: calc(var(--el-menu-icon-width) + $menu-base-level-padding * 2);
}
:deep(.el-menu--vertical:not(.el-menu--collapse):not(.el-menu--popup-container) .first-layer > .el-sub-menu__title) {
  height: 57px;
  padding-left: $menu-base-level-padding;
  padding-right: calc($menu-base-level-padding + var(--el-menu-icon-width));
}
:deep(.el-menu--vertical:not(.el-menu--collapse):not(.el-menu--popup-container) .second-layer > .el-sub-menu__title) {
  padding-left: 57px;
}
:deep(.el-menu--vertical:not(.el-menu--collapse):not(.el-menu--popup-container) .el-menu-item.third-layer) {
  padding-left: 77px;
}
:deep(.el-sub-menu__title:hover), :deep(.el-menu-item:hover) {
  background-color: #D8DDEB;
}
:deep(.el-sub-menu__title) {
  .el-icon {
    margin-right: 13px;
  }
  > span {
    font-weight: bold;
    width: 179px;
    word-break: break-word;
    white-space: normal;
    line-height: 24px;
  }
}
:deep(.el-menu-vertical.v-leave-active.v-leave-to .el-sub-menu__title) {
  > span {
    white-space: nowrap;
  }
}
:deep(.el-sub-menu .el-sub-menu__icon-arrow) {
  background-image: url("../assets/arrow.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 8px;
}
.first-layer {
  > :deep(.el-sub-menu__title) {
    padding-left: $menu-base-level-padding;
    line-height: 24px;
    height: 57px;
  }
}
</style>
<style lang="scss">
.menu-popper {
  display: none;
}
</style>
