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
  padding: 20px;
  width: var(--docs-sidebar-width);
  height: 100%;
  background-color: var(--docs-c-bg);
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
