<template>
  <div class="menu-list sticky top-0 pb-20px z-1 hidden sm:block js-menu-list">
    <div class="flex flex-wrap justify-center items-center p-10px bg-white">
      <div v-for="num in 30" :key="num" class="btn js-link-btn" :data-index="num">
        Vue: {{ num }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.menu-list {
  background-color: #edeef3;
}

.btn {
  @apply px-12px m-8px text-12px leading-26px text-center rounded-14px cursor-pointer;
  color: #3e3f65;
  border: 1px solid #c3c5cf;
}

.btn.active {
  @apply text-white font-bold opacity-80;
  border: 1px solid #de3a31;
  background-color: #de3a31;
}
</style>
