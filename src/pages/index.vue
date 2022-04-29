<template>
  <Tabs :bookmarks="bookmarks" />

  <div class="h-container">
    <Bookmarks
      v-for="(bookmark, index) in bookmarks"
      :key="index"
      :bookmark="bookmark"
    />
  </div>
</template>

<script setup lang="ts">
import { activeLink } from '~/composables'

import bookmarks from '~/bookmarks'

activeLink()
</script>
