import type { Icons } from '@/components/icons'

export interface NavItem {
  title: string
  href?: string
  disabled?: boolean
  external?: boolean
}

export interface SidebarNavItem {
  title: string
  href: string
  disabled?: boolean
  icon?: keyof typeof Icons
}

export interface AdminConfig {
  mainNav: MainNavItem[]
  sidebarNav: SidebarNavItem[]
}
