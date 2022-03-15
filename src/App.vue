<template>
  <!-- <Header />
  <main class="main">
    <Sidebar :sidebar="Object.keys(data)" />
    <Content :data="data" />
  </main> -->
  <div class="h-docs">
    <Header />
    <Sidebar />
    <Content />
  </div>
</template>

<script setup lang="ts">
import data from './data'
</script>

<style scoped>
.h-docs {
  height: 100vh;
}
</style>
