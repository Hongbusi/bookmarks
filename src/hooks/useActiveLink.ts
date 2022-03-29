import { throttleAndDebounce } from '~/utils'

export function useActiveLink() {
  const isOutlineEnabled = useMediaQuery('(min-width: 137px)')
  const onScroll = throttleAndDebounce(setActiveLink, 100)
  const onClick = (event: Event) => {
    const target = event.target as HTMLElement

    if (target.matches('.js-link-btn')) {
      const anchors = [].slice.call(document.querySelectorAll('.js-header-anchor')) as HTMLDivElement[]
      const targetAnchor = anchors[Number(target.dataset.index) - 1]
      const menuListEl = document.querySelector('.js-menu-list') as HTMLElement
      window.scrollTo(0, targetAnchor.offsetTop - menuListEl.offsetHeight)
    }
  }

  function setActiveLink(): void {
    if (!isOutlineEnabled.value) {
      return
    }

    const links = [].slice.call(document.querySelectorAll('.js-link-btn')) as HTMLDivElement[]
    const anchors = [].slice.call(document.querySelectorAll('.js-header-anchor')) as HTMLDivElement[]

    for (let i = 0; i < anchors.length; i++) {
      const anchor = anchors[i]
      const nextAnchor = anchors[i + 1]

      const isActive = isActiveLink(i, anchor, nextAnchor)

      if (isActive) {
        activateLink(links[i])
        return
      }
    }
  }

  let prevActiveLink: HTMLElement | null = null

  function activateLink(activeLink: HTMLElement): void {
    if (prevActiveLink) {
      prevActiveLink.classList.remove('active')
    }

    if (activeLink) {
      activeLink.classList.add('active')
    }

    prevActiveLink = activeLink
  }

  function getAnchorTop(anchor: HTMLDivElement): number {
    const menuList = document.querySelector('.js-menu-list') as HTMLDivElement
    return anchor.offsetTop - menuList.offsetHeight - 20
  }

  function isActiveLink(index: number, anchor: HTMLDivElement, nextAnchor: HTMLDivElement | undefined): boolean {
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

  onMounted(() => {
    requestAnimationFrame(setActiveLink)
    window.addEventListener('scroll', onScroll)
    window.addEventListener('click', onClick)
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', onScroll)
    window.removeEventListener('click', onClick)
  })
}
