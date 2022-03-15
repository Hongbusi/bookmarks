<template>
  <header class="header">
    <div class="nav">
      <span class="title">Docs Nav</span>
      <a href="https://github.com/Hongbusi/navigation" target="_blank">
        <GitHub />
      </a>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  border-bottom: 1px solid var(--docs-c-border);
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 20px;
  padding-left: 20px;
  margin-left: auto;
  margin-right: auto;
  width: var(--docs-max-width);
  height: var(--docs-header-height);
}

.nav .title {
  font-size: 16px;
  font-weight: 600;
}
</style>
