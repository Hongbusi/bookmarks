<template>
  <div class="h-layout">
    <Header />

    <main class="h-layout-content">
      <Sidebar />
      <Content />
    </main>
  </div>
</template>

<style scoped>
.h-layout {
  height: 100vh;
}

.h-layout-content {
  display: flex;
  padding: 20px;
  margin-left: auto;
  margin-right: auto;
  width: var(--docs-max-width);
  height: calc(100vh - var(--docs-header-height));
}
</style>
