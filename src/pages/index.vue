<template>
  <div class="mt-20px mx-auto container">
    <MenuList />

    <div>
      <div class="mb-50px h-300px bg-white js-header-anchor">
        Vue(Mobile)
      </div>

      <div v-for="num in 30" :key="num" class="mb-50px h-300px bg-white js-header-anchor">
        Vue: {{ num }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useActiveLink } from '~/hooks/useActiveLink'

useActiveLink()
</script>
