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
import { throttleAndDebounce } from '~/utils'

const isOutlineEnabled = useMediaQuery('(min-width: 137px)')
const onScroll = throttleAndDebounce(setActiveLink, 100)

function setActiveLink(): void {
  if (!isOutlineEnabled.value) {
    return
  }

  const links = [].slice.call(document.querySelectorAll('.js-link-btn')) as HTMLDivElement[]
  const anchors = [].slice.call(document.querySelectorAll('.js-header-anchor')) as HTMLDivElement[]

  for (let i = 0; i < anchors.length; i++) {
    const anchor = anchors[i]
    const nextAnchor = anchors[i + 1]

    const isActive = isAnchorActive(i, anchor, nextAnchor)

    if (isActive) {
      activateLink(links[i])
      return
    }
  }
}

let prevActiveLink: HTMLDivElement | null = null

function activateLink(activeLink: HTMLDivElement): void {
  if (prevActiveLink) {
    prevActiveLink.classList.remove('active')
  }

  if (activeLink) {
    activeLink.classList.add('active')
  }

  prevActiveLink = activeLink
}

onMounted(() => {
  requestAnimationFrame(setActiveLink)
  window.addEventListener('scroll', onScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})

// magic number to avoid repeated retrieval
const pageOffset = 56

function getAnchorTop(anchor: HTMLDivElement): number {
  return anchor.offsetTop - pageOffset - 15
}

function isAnchorActive(index: number, anchor: HTMLDivElement, nextAnchor: HTMLDivElement | undefined): boolean {
  const scrollTop = window.scrollY

  if (index === 0 && scrollTop === 0) {
    return true
  }

  if (scrollTop < getAnchorTop(anchor)) {
    return false
  }

  if (!nextAnchor || scrollTop < getAnchorTop(nextAnchor)) {
    return true
  }

  return false
}
</script>
