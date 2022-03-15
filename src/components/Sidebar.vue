<template>
  <aside class="sidebar">
    <nav class="sidebar-nav">
      <a v-for="item in sidebar" :key="item" class="link" :href="`#${item}`">
        <p class="link-text">
          {{ item }}
        </p>
      </a>
    </nav>
  </aside>
</template>

<script setup lang="ts">
import data from '../config'

const sidebar = Object.keys(data)
</script>

<style scoped>
.sidebar {
  overflow-y: auto;
  position: fixed;
  top: var(--hbs-header-height);
  bottom: 0;
  left: 0;
  padding: 0 32px 96px calc((100% - var(--hbs-max-width)) / 2 + var(--hbs-blank-width));
  width: calc((100% - var(--hbs-max-width)) / 2 + var(--hbs-sidebar-width));
  height: 100%;
  background-color: var(--docs-c-bg);
  border-right: 1px solid var(--hbs-c-border);
}

.sidebar-nav {
  padding-top: 24px;
}

@media (max-width: 1440px) {
  .sidebar {
    /* padding: 0 32px 96px calc((100% - var(--vp-screen-max-width)) / 2); */
    display: none;
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
  color: var(--docs-c-red);
}
</style>
