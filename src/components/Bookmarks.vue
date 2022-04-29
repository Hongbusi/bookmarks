<template>
  <div class="mb-5 px-5 sm:px-0 js-header-anchor">
    <div class="relative flex items-center pl-20px h-44px h-bg h-border">
      <div class="absolute left-0 w-2px h-24px bg-green" />
      {{ bookmark.title }}
    </div>

    <div class="flex flex-wrap justify-between mx--2">
      <div v-for="(item, j) in bookmark.items" :key="j" class="flex-1 px-2 min-w-250px">
        <div class="flex flex-col mt-5 h-140px h-bg h-border transition-all hover:bg-gray5:2 shadow">
          <a :href="item.zhLink || item.enLink" target="_blank" class="flex-1">
            <div class="px-14px py-10px">
              <div class="flex items-center">
                <img class="mr-10px w-40px h-40px font-bold" :src="item.logo" :alt="item.name">
                {{ item.name }}
              </div>
              <p class="line-clamp-2 mt-10px text-sm">
                {{ item.desc }}
              </p>
            </div>
          </a>
          <div class="flex items-center px-14px h-30px">
            <a :href="item.github" target="_blank">
              <div i-carbon-logo-github />
            </a>
            <a
              v-if="item.zhLink"
              :href="item.zhLink"
              target="_blank"
              class="badge-xs-green mx-2"
            >中文</a>
            <a
              v-if="item.enLink"
              :href="item.enLink"
              target="_blank"
              class="badge-xs-red"
            >EN</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  bookmark: {
    type: Object,
    required: true
  }
})
</script>
