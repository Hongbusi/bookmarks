<template>
  <div class="mt-20px mx-auto container">
    <div class="sticky top-0 pb-20px z-1 text-[#edeef3] hidden sm:block js-menu-list">
      <div class="flex flex-wrap justify-center items-center p-10px bg-white">
        <div
          v-for="(key, index) in Object.keys(bookmarks)"
          :key="key"
          class="px-12px m-8px text-12px leading-26px text-center text-[#3e3f65] border border-[#c3c5cf] rounded-14px cursor-pointer js-link-btn"
          :data-index="index"
        >
          {{ key }}
        </div>
      </div>
    </div>

    <div v-for="(bookmark, key) in bookmarks" :key="key" class="mb-20px px-10px sm:px-0 js-header-anchor">
      <div class="relative flex items-center pl-20px h-44px bg-white">
        <div class="absolute left-0 w-2px h-24px bg-[#ffb9b5]" />
        {{ key }}
      </div>

      <div class="flex flex-wrap justify-between mx--10px">
        <div v-for="(item, index) in bookmark" :key="index" class="flex-1 px-10px min-w-250px">
          <div class="flex flex-col mt20px h-140px bg-white">
            <div class="flex-1 px-14px py-10px">
              <div class="flex items-center">
                <img class="mr-10px w-40px h-40px" :src="item.logo" :alt="item.name">
                {{ item.name }}
              </div>
              <p class="line-clamp-2 mt-10px text-[#727171] text-sm">
                {{ item.desc }}
              </p>
            </div>
            <div class="flex items-center px-14px h-30px bg-[#c3c4ce]">
              <a :href="item.github" target="_blank">
                <carbon-logo-github />
              </a>
              <a :href="item.zhLink" target="_blank" class="py-1px mx-8px w-30px text-center transition-all border rounded-2px  border-gray-500/50 text-xs hover:text-[#de3a31] hover:border-[#de3a31]">中文</a>
              <a :href="item.enLink" target="_blank" class="py-1px w-30px text-center transition-all border rounded-2px  border-gray-500/50 text-xs hover:text-[#de3a31] hover:border-[#de3a31]">EN</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useActiveLink } from '~/hooks/useActiveLink'

import bookmarks from '~/bookmarks'

useActiveLink()
</script>

<style scoped>
.active {
  @apply text-white font-bold opacity-80 border border-[#de3a31] bg-[#de3a31];
}
</style>
