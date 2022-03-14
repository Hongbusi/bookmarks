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
defineProps<{
  sidebar: string[]
}>()
</script>

<style scoped>
.sidebar {
  overflow-y: auto;
  padding: 32px 32px 96px 0;
  width: 248px;
  height: 100%;
  border-right: 1px solid rgba(60, 60, 60, .12);
}

.link {
  display: block;
  padding: 8px 0;
}

.link-text {
  line-height: 20px;
  font-size: 14px;
  font-weight: 600;
  color: #213547;
  transition: color .25s;
}

.link.active .link-text,
.link:hover .link-text {
  color: #42b883;
}
</style>
