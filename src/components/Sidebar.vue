<template>
  <div class="sidebar">
    <a v-for="item in sidebar" :key="item" class="link" :href="`#${item}`">
      <p class="link-text">
        {{ item }}
      </p>
    </a>
  </div>
</template>

<script setup lang="ts">
import data from '../config'

const sidebar = Object.keys(data)
</script>

<style scoped>
.sidebar {
  overflow-y: auto;
  position: fixed;
  top: var(--docs-header-height);
  bottom: 0;
  left: 0;
  padding: 32px 32px 96px calc((100vw - var(--docs-max-width)) / 2 + 20px);
  width: calc((100% - var(--docs-max-width)) / 2 + var(--docs-sidebar-width));
  min-width: var(--docs-sidebar-width);
  border-right: 1px solid var(--docs-c-border);
}

@media (max-width: 1376px) {
  .sidebar {
    padding-left: 0;
  }
}

.link {
  display: block;
  padding: 8px 0;
}

.link-text {
  line-height: 20px;
  transition: color .25s;
}

.link.active .link-text,
.link:hover .link-text {
  color: var(--docs-c-green);
}
</style>
