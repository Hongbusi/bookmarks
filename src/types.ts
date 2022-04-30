import type { ViteSSGContext } from 'vite-ssg'

export type UserModule = (ctx: ViteSSGContext) => void

export interface Bookmark {
  name: string
  icon: string
  desc: string
  zhLink: string
  enLink: string
  github: string
}

export type Bookmarks = Bookmark[]
