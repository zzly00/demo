<script setup lang="ts">
import Header from './components/Header.vue'
import Menu from './components/Menu.vue'
import MyCollection from './components/MyCollection.vue'
import useMenu from './composition/useMenu';

const { menuState, switchMenuCollapse } = useMenu();

</script>

<template>
  <div class="main-container">
    <div class="top">
      <Header :switchMenuCollapse="switchMenuCollapse" />
    </div>
    <div class="bottom">
      <Menu :menuState="menuState" />
      <MyCollection />
    </div>
  </div>
</template>

<style lang="scss">
@import './style/reset.scss';
@import './style/style.scss';

html, body {
  width: 100vw;
  height: 100vh;
  background-color: #F2F2F7;
}

#app {
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #11263C;
}

p, th, td, span, li {
  color: #11263C;
}

.main-container {
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

.top {
  width: 100%;
  height: 112px;
}

.bottom {
  width: 100%;
  height: calc(100vh - 112px);
  display: flex;
}

.el-select-dropdown__item {
  color: #11263C;
  span {
    font-family: 'Poppins', sans-serif;
  }
}

.el-input__inner {
  font-family: 'Poppins', sans-serif !important;
  color: #737791 !important;
}
</style>
