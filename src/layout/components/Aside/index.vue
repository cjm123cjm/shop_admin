<template>
  <el-scrollbar
    height="100%"
    :wrap-style="{
      background: '#2d3a4b',
    }"
  >
    <div class="logo">
      {{ $store.state.layoutStore.isExpand ? "ZZQ0301" : "ZZQ" }}
    </div>
    <!-- 导航菜单 -->
  </el-scrollbar>
</template>

<script setup></script>

<style lang="scss" scoped></style>
