import type { Bookmarks } from '~/types'

const bookmarks: Bookmarks = [
  {
    name: 'Vite',
    logo: 'https://cn.vitejs.dev/logo.svg',
    desc: '下一代前端开发与构建工具。',
    zhLink: 'https://cn.vitejs.dev',
    enLink: 'https://vitejs.dev',
    github: 'https://github.com/vitejs/vite'
  },
  {
    name: 'webpack',
    logo: 'https://camo.githubusercontent.com/b0573f87b0786eda63c76f2a9a1358e7a653783c25c03c6c908a00b70c713d78/68747470733a2f2f7765627061636b2e6a732e6f72672f6173736574732f69636f6e2d7371756172652d6269672e737667',
    desc: '用于现代 JavaScript 应用程序的静态模块打包工具。',
    zhLink: 'https://webpack.docschina.org/',
    enLink: 'https://webpack.js.org',
    github: 'https://github.com/webpack/webpack'
  },
  {
    name: 'Parcel',
    logo: 'https://cdn.docschina.org/home/logo/parcel.png',
    desc: '极速零配置 Web 应用打包工具。',
    zhLink: 'https://parceljs.docschina.org',
    enLink: 'https://parceljs.org',
    github: 'https://github.com/parcel-bundler/parcel'
  },
  {
    name: 'Rollup',
    logo: 'https://rollup.docschina.org/logo.svg',
    desc: '新一代 JavaScript 模块打包器。',
    zhLink: 'https://rollupjs.org/guide/zh',
    enLink: 'https://rollupjs.org/guide/en',
    github: 'https://github.com/rollup/rollup'
  },
  {
    name: 'Gulp',
    logo: 'https://rollup.docschina.org/logo.svg',
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
