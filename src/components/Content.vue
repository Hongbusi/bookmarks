<template>
  <div class="content">
    <div class="content-nav">
      <ContentList />
    </div>
  </div>
</template>

<style scoped>
.content {
  padding-top: var(--hbs-header-height);
  padding-left: calc((100vw - var(--hbs-max-width)) / 2 + var(--hbs-sidebar-width));
}

.content-nav {
  padding: 24px calc((100vw - var(--hbs-max-width)) / 2) 96px 32px;
}
</style>
