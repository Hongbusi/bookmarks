import type { ViteSSGContext } from 'vite-ssg'

export type UserModule = (ctx: ViteSSGContext) => void

export interface DocsDataItem {
  logo: string
  name: string
  desc: string
  zhLink: string
  enLink: string
  repo: string
}

export type DocsData = Record<string, DocsDataItem[]>
