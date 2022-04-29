<template>
  <header class="text-xl border-b border-gray-200">
    <nav class="flex justify-between items-center container mx-auto h-60px">
      <router-link class="icon-btn mx-2" to="/" title="首页">
        Bookmarks
      </router-link>

      <div>
        <button class="icon-btn mx-2 !outline-none" title="切换深色模式" @click="toggleDark()">
          <div i="carbon-sun dark:carbon-moon" />
        </button>

        <a class="icon-btn mx-2" rel="noreferrer" href="https://github.com/developer-plus/bookmarks" target="_blank" title="GitHub">
          <div i-carbon-logo-github />
        </a>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { toggleDark } from '~/composables'
</script>
