<script setup lang="ts">
const { y } = useWindowScroll()

const goTop = () => {
  document.documentElement.scrollTop = document.body.scrollTop = 0
}
</script>

<template>
  <a v-if="y>200" class="fixed bottom-10 right-10 bg-blue-500 dark:bg-blue-700 rounded-lg p-2" @click="goTop">
    <div i-akar-icons-align-to-top class="text-3xl text-white dark:text-opacity-80" />
  </a>
</template>
