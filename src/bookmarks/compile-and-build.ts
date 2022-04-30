import type { Bookmarks } from '~/types'

const bookmarks: Bookmarks = [
  {
    name: 'Vite',
    icon: 'vite',
    desc: '下一代前端开发与构建工具。',
    zhLink: 'https://cn.vitejs.dev',
    enLink: 'https://vitejs.dev',
    github: 'https://github.com/vitejs/vite'
  },
  {
    name: 'webpack',
    icon: 'webpack',
    desc: '用于现代 JavaScript 应用程序的静态模块打包工具。',
    zhLink: 'https://webpack.docschina.org/',
    enLink: 'https://webpack.js.org',
    github: 'https://github.com/webpack/webpack'
  },
  {
    name: 'Parcel',
    icon: 'parcel',
    desc: '极速零配置 Web 应用打包工具。',
    zhLink: 'https://parceljs.docschina.org',
    enLink: 'https://parceljs.org',
    github: 'https://github.com/parcel-bundler/parcel'
  },
  {
    name: 'Rollup',
    icon: 'rollup',
    desc: '新一代 JavaScript 模块打包器。',
    zhLink: 'https://rollupjs.org/guide/zh',
    enLink: 'https://rollupjs.org/guide/en',
    github: 'https://github.com/rollup/rollup'
  },
  {
    name: 'Gulp',
    icon: 'gulp',
    desc: '基于流的自动化构建工具。',
    zhLink: 'https://www.gulpjs.com.cn',
    enLink: 'https://gulpjs.com',
    github: 'https://github.com/gulpjs/gulp'
  }
]

export default {
  order: 2,
  title: '编译构建',
  items: bookmarks
}
