<template>
  <el-container class="common-layout">
    <el-aside :width="$store.state.layoutStore.isExpand ? '200px' : '64px'">
      <Aside></Aside>
    </el-aside>
    <el-container>
      <el-header>Header</el-header>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script setup>
import Aside from "./components/Aside/index.vue";
</script>

<style lang="scss" scoped>
.common-layout {
  height: 100vh;

  .el-aside {
    transition: width 0.3s ease-out;

    .logo {
      height: 60px;
      line-height: 60px;
      color: #fff;
      font-size: 26px;
      font-weight: bold;
      text-align: center;
    }

    .el-menu-vertical-demo:not(.el-menu--collapse) {
      width: 200px;
      min-height: 400px;
    }
  }

  .el-header {
    display: flex;
    align-items: center;
    margin-bottom: 34px;
    padding: 0;
  }

  .el-main {
    width: 100%;
    /* background-color: #f0f2f5; */
    padding: 0;
  }
}
</style>
