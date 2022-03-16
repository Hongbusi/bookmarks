<template>
  <aside ref="container" class="sidebar">
    <a v-for="item in sidebar" :key="item" class="sidebar-link" :href="`#${item}`">
      {{ item }}
    </a>
  </aside>
</template>

<script setup lang="ts">
import { useActiveAnchor } from '../composables/outline'

import data from '../config'
const container = ref()
const marker = ref()

const sidebar = Object.keys(data)
useActiveAnchor(container, marker)
</script>

<style scoped>
.sidebar {
  overflow-y: auto;
  position: fixed;
  top: var(--hbs-header-height);
  bottom: 0;
  left: 0;
  padding: 20px var(--hbs-blank-width) 96px calc((100% - var(--hbs-max-width)) / 2 + var(--hbs-blank-width));
  width: calc((100% - var(--hbs-max-width)) / 2 + var(--hbs-sidebar-width));
  height: 100%;
  background-color: var(--docs-c-bg);
  border-right: 1px solid var(--hbs-c-border);
}

@media (max-width: 1400px) {
  .sidebar {
    display: none;
  }
}

.sidebar-link {
  position: relative;
  display: block;
  padding-left: var(--hbs-blank-width);
  padding: 6px 12px;
  margin-top: 4px;
  margin-bottom: 8px;
  transition: color .25s;
  opacity: 0.66;
}

.sidebar-link.active {
  color: var(--hbs-c-text-primary);
  background-color: var(--hbs-c-bg-primary-light);
}

.sidebar-link:hover {
  color: var(--hbs-c-text-primary);
}

.sidebar-link.active::before {
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
