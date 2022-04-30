<template>
  <div class="sticky top-0 z-1 hidden sm:block js-menu-list">
    <div class="flex flex-wrap justify-center items-center px-3 h-56px h-bg border-b border-gray-200 dark:border-gray-200/20">
      <div
        v-for="(bookmark, index) in bookmarks"
        :key="index"
        class="flex items-center px-3 mx-2 h-32px text-sm h-border rounded-16px cursor-pointer transition-all bg-black/5 hover:bg-black/10 js-link-btn"
        :data-index="index"
      >
        <span>{{ bookmark.title }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  bookmarks: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
.active {
  @apply text-white bg-black hover:bg-black;
}
</style>
