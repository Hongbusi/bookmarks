<template>
  <div class="content">
    <ContentList />
  </div>
</template>

<style scoped>
.content {
  padding-top: var(--docs-header-height);
  padding-left: calc((100vw - var(--docs-max-width)) / 2 + var(--docs-sidebar-width));
  min-width: var(--docs-max-width);
}
</style>
