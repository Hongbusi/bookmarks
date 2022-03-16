<template>
  <div class="content">
    <div class="content-list">
      <div class="content-list-item">
        <DocsSec />
      </div>
    </div>
  </div>
</template>

<style scoped>
.content {
  padding-top: var(--hbs-header-height);
  padding-left: calc((100vw - var(--hbs-max-width)) / 2 + var(--hbs-sidebar-width));
}

.content-list {
  padding: 24px calc((100vw - var(--hbs-max-width)) / 2 + var(--hbs-blank-width)) 96px 32px;
}

@media (max-width: 1400px) {
  .content {
    padding-left: 0;
  }

  .content-list {
    padding: 24px var(--hbs-blank-width);
  }
}
</style>
