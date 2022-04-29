<template>
  <div class="sticky top-0 pb-5 z-1 hidden sm:block js-menu-list">
    <div class="flex flex-wrap justify-center items-center p-2 shadow h-bg h-border">
      <div
        v-for="(bookmark, index) in bookmarks"
        :key="index"
        class="px-3 py-1 m-2 text-xs h-border rounded-14px cursor-pointer js-link-btn"
        :data-index="index"
      >
        {{ bookmark.title }}
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
  @apply badge-sm-green;
}
</style>
