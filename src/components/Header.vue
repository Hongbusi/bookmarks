<template>
  <header class="header">
    <nav class="container nav">
      <span class="nav-title">Docs Nav</span>
      <a href="https://github.com/Hongbusi/navigation" target="_blank">
        <GitHub />
      </a>
    </nav>
  </header>
</template>

<style scoped>
.header {
  z-index: 10;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  width: 100%;
  background-color: var(--hbs-c-bg);
  border-bottom: 1px solid var(--hbs-c-border);
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: var(--hbs-header-height);
}

.nav-title {
  font-size: 16px;
  font-weight: 600;
}
</style>
