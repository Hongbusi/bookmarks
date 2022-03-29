<template>
  <div class="mt-20px mx-auto container">
    <MenuList />

    <div v-for="num in 30" :key="num" class="mb-20px px-10px sm:px-0 js-header-anchor">
      <div class="relative flex items-center pl-20px h-44px bg-white header">
        Vue: {{ num }}
      </div>

      <div class="flex flex-wrap justify-between mx--10px">
        <div v-for="i in 10" :key="i" class="flex-1 px-10px min-w-250px">
          <div class="mt20px bg-white">
            content
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useActiveLink } from '~/hooks/useActiveLink'

useActiveLink()
</script>

<style scoped>
.header::after {
  @apply absolute left-0 w-2px h-24px;
  content: '';
  background: #ffb9b5;
}
</style>
