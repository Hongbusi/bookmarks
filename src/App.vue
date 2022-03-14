<template>
  <Header />
  <main class="container main">
    <Sidebar />
    <Content />
  </main>
</template>

<script setup lang="ts">
</script>

<style scoped>
.main {
  display: flex;
  height: calc(100vh - 60px);
}
</style>
