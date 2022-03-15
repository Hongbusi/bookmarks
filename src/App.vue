<template>
  <Header />
  <main class="main">
    <Sidebar :sidebar="Object.keys(data)" />
    <Content :data="data" />
  </main>
</template>

<script setup lang="ts">
import data from './data'
</script>

<style scoped>
.main {
  display: flex;
  height: calc(100vh - 60px);
}
</style>
