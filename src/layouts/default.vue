<template>
  <main>
    <header class="bg-white px-16px sm:px-0">
      <nav class="flex justify-between items-center mx-auto container h-60px">
        <h2 class="text-lg">
          Bookmarks
        </h2>
        <a class="text-sm transition-all hover:text-[#de3a31]" href="https://github.com/Hongbusi/docs-navigation" target="_blank">
          参与贡献/建议
        </a>
      </nav>
    </header>

    <router-view />

    <footer class="container pt-16px pb-30px mx-auto text-center text-gray-600 text-sm">
      Copyright (c) 2022 Hongbusi.
      <a class="ml-8px transition-all hover:text-[#de3a31]" href="https://docschina.org" target="_blank">Design - 印记中文</a>
    </footer>
  </main>

  <Plum />
</template>
