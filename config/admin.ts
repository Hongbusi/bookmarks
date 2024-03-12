import type { AdminConfig } from '@/types'

export const adminConfig: AdminConfig = {
  mainNav: [
    {
      title: 'Home',
      href: '/',
    },
  ],
  sidebarNav: [
    {
      title: 'Dashboard',
      href: '/admin/dashboard',
    },
    {
      title: 'Bookmarks',
      href: '/admin/bookmarks',
    },
    {
      title: 'Settings',
      href: '/admin/settings',
      icon: 'settings',
    },
  ],
}
