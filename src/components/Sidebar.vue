<template>
  <aside class="sidebar">
    <nav class="sidebar-nav">
      <a v-for="item in sidebar" :key="item" class="link active" :href="`#${item}`">
        {{ item }}
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
  padding: 0 var(--hbs-blank-width) 96px calc((100% - var(--hbs-max-width)) / 2 + var(--hbs-blank-width));
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
    display: none;
  }
}

.link {
  position: relative;
  display: block;
  padding-left: var(--hbs-blank-width);
  padding: 6px 12px;
  margin-top: 4px;
  margin-bottom: 8px;
  transition: color .25s;
  opacity: 0.66;
}

.link.active {
  color: var(--hbs-c-text-primary);
  background-color: var(--hbs-c-bg-primary-light);
}

.link.active:hover {
  color: var(--hbs-c-text-primary);
}

.link.active::before {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  content: "";
  transform: scaleY(1);
  opacity: 1;
  transition: transform .15s cubic-bezier(.645, .045, .355, 1), opacity .15s cubic-bezier(.645, .045, .355, 1);
  border-right: 3px solid var(--hbs-c-bg-primary);
}
</style>
