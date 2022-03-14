<template>
  <header class="header">
    <div class="container nav" style="height: 60px;">
      <span class="title">Docs Nav</span>
      <a href="https://github.com/Hongbusi/navigation" target="_blank">
        <GitHub />
      </a>
    </div>
  </header>
</template>

<style scoped>
.header {
  border-bottom: 1px solid rgba(60, 60, 60, .12);
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
}

.nav .title {
  font-size: 16px;
  font-weight: 600;
}
</style>
