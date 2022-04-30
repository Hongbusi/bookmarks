import type { Bookmarks } from '~/types'

const bookmarks: Bookmarks = [
  {
    name: 'Vue3',
    icon: 'vue',
    desc: '渐进式 JavaScript 框架。',
    zhLink: 'https://v3.cn.vuejs.org',
    enLink: 'https://vuejs.org',
    github: 'https://github.com/vuejs/core'
  },
  {
    name: 'Vue Router',
    icon: 'vue',
    desc: 'Vue.js 的官方路由。',
    zhLink: 'https://router.vuejs.org/zh',
    enLink: 'https://router.vuejs.org',
    github: 'https://github.com/vuejs/router'
  },
  {
    name: 'Vuex',
    icon: 'vue',
    desc: 'Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式 + 库。',
    zhLink: 'https://vuex.vuejs.org/zh',
    enLink: 'https://vuex.vuejs.org',
    github: 'https://github.com/vuejs/vuex'
  },
  {
    name: 'Pinia',
    icon: 'pinia',
    desc: 'The Vue Store that you will enjoy using.',
    zhLink: '',
    enLink: 'https://pinia.vuejs.org',
    github: 'https://github.com/vuejs/pinia'
  },
  {
    name: 'Vue CLI',
    icon: 'vue',
    desc: 'Vue.js 开发的标准工具。',
    zhLink: 'https://cli.vuejs.org/zh',
    enLink: 'https://cli.vuejs.org',
    github: 'https://github.com/vuejs/vue-cli'
  }
]

export default {
  order: 1,
  title: 'Vue',
  items: bookmarks
}
