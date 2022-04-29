
<template>
  <nav text-xl mt-6>
    <router-link class="icon-btn mx-2" to="/" title="首页">
      <div i-carbon-home />
    </router-link>

    <button class="icon-btn mx-2 !outline-none" title="切换深色模式" @click="toggleDark()">
      <div i="carbon-sun dark:carbon-moon" />
    </button>

    <a class="icon-btn mx-2" rel="noreferrer" href="https://github.com/Hongbusi/vitemplate" target="_blank" title="GitHub">
      <div i-carbon-logo-github />
    </a>
  </nav>
</template>

<script setup lang="ts">
import { toggleDark } from '~/composables'
</script>
