<template>
  <div class="sidebar">
    <!-- <a v-for="item in sidebar" :key="item" class="link" :href="`#${item}`">
      <p class="link-text">
        {{ item }}
      </p>
    </a> -->
  </div>
</template>

<script setup lang="ts">
// defineProps<{
//   sidebar: string[]
// }>()
</script>

<style scoped>
.sidebar {
  overflow-y: auto;
  position: fixed;
  top: var(--docs-header-height);
  left: 0;
  padding: 0 32px 96px calc((100% - var(--docs-max-width)) / 2 + 20px);
  width: calc((100% - var(--docs-max-width)) / 2 + var(--docs-sidebar-width));
  height: 100%;
  border-right: 1px solid rgba(60, 60, 60, .12);
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
  color: #42b883;
}
</style>
