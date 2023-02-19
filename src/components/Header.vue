<script setup lang="ts">
import { ref, defineProps } from 'vue';
 interface Props {
  switchMenuCollapse: () => void;
}

defineProps<Props>();

const getImg = (img: string) => {
  return new URL(`../assets/${img}`, import.meta.url).href;
};

const searchInput = ref('');
const searchValue = ref('ByAll');
const selectedCity = ref('Antananarivo');

const searchOptions = [
  {
    value: 'ByAll',
    label: 'By All',
  },
  {
    value: 'ByStation',
    label: 'By Station',
  },
  {
    value: 'ByCountry',
    label: 'By Country',
  }
];

const city = [
  {
    value: 'Antananarivo',
    label: 'Antananarivo',
  },
  {
    value: 'Hongkong',
    label: 'Hongkong',
  },
  {
    value: 'Taipei',
    label: 'Taipei',
  },
  {
    value: 'Tokyo',
    label: 'Tokyo',
  }
];
</script>

<template>
  <div class="header">
    <div class="left-wrap">
      <div class="logo-wrap">
        <img class="menu" :src="getImg('menu.png')" @click="switchMenuCollapse" />
        <img class="logo" :src="getImg('logo.png')" />
      </div>
      <div class="search-wrap">
        <el-input  v-model="searchInput" placeholder="Search here...">
          <template #suffix>
            <img class="search" :src="getImg('search.svg')" />
          </template>
        </el-input>
        <el-select v-model="searchValue" placeholder="Select">
          <el-option
            v-for="item in searchOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </div>
    </div>
    <div class="right-wrap">
      <div class="location">
        <img :src="getImg('weather.svg')" />
        <p>09:54 am</p>
        <el-select v-model="selectedCity" placeholder="Select">
          <el-option
            v-for="item in city"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </div>
      <div class="setting-wrap">
        <img class="setting-icon" :src="getImg('setting.png')" />
        <img class="alarm-icon" :src="getImg('alarm.png')" />
        <div class="avatar-wrap">
          <img class="avatar" :src="getImg('avatar.png')" />
          <img class="arrow-icon" :src="getImg('arrow.svg')" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.header {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
}
.left-wrap,
.right-wrap {
  display: flex;
}
.logo-wrap {
  display: flex;
  .menu {
    margin-left: 25.01px;
    margin-top: 44.5px;
    width: 20.56px;
    height: 16px;
    cursor: pointer;
  }
  .logo {
    margin-left: 34.43px;
    margin-top: 38px;
    width: 164px;
    height: 34.69px;
  }
}
.search-wrap {
  display: flex;
  margin-top: 32px;
  margin-left: 52px;
  :deep(.el-input__wrapper) {
    width: 245px;
    height: 48px;
    padding: 2px 16px;
    font-size: 18px;
    line-height: 27px;
    background: #FFFFFF;
    border: 1px solid #737791;
    border-radius: 8px;
  }
  :deep(.el-select) {
    width: 101px;
    height: 48px;
    margin-left: 8px;
  }
}
.location {
  // margin-top: 44.5px;
  display: flex;
  justify-content: center;
  align-items: center;
  > img {
    margin-right: 12px;
  }
  > p {
    margin-right: 16px;
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    color: #374557;
  }
  .el-select {
    width: 140px;
    margin-right: 58px;
    --el-select-border-color-hover: none;
  }
  :deep(.el-select .el-input.is-focus .el-input__wrapper),
  :deep(.el-select .el-input__wrapper.is-focus) {
    box-shadow: none !important;
  }
  :deep(.el-input__wrapper) {
    padding: 0px;
    background-color: #F2F2F7;
    box-shadow: none !important;
    .el-input__inner {
      font-weight: 400;
      font-size: 18px;
      line-height: 27px;
      width: 123px;
      color: #737791;
    }
  }
}

.setting-wrap {
  display: flex;
  align-items: center;
  .setting-icon {
    width: 48px;
    height: 48px;
    margin-right: 53px;
  }
  .alarm-icon {
    width: 28.67px;
    height: 26px;
    margin-right: 47px;
  }
  .avatar-wrap {
    display: flex;
    .avatar {
      width: 50px;
      height: 50px;
      margin-right: 8px;
    }
    .arrow-icon {
      width: 8px;
      // height: 4px;
      margin-right: 38.33px;   
    }
  }
}
:deep(.el-select .el-input .el-select__caret) {
  background-image: url("../assets/arrow.svg");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: 8px;
}
</style>
