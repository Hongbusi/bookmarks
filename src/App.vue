<template>
  <router-view />
</template>

<script setup lang="ts">
useHead({
  title: 'Bookmarks',
  meta: [
    { name: 'description', content: 'Bookmarks for Frontend Developers.' }
  ]
})
</script>
