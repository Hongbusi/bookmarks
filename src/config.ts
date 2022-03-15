export interface IDoc {
  logo: string
  name: string
  desc: string
  zhLink: string
  enLink: string
  repo: string
}

export type IData = Record<string, IDoc[]>

const data: IData = {
  'Vue3': [
    {
      name: 'Vue3',
      logo: 'https://v3.cn.vuejs.org/logo.png',
      desc: '这是一个描述',
      zhLink: 'https://v3.cn.vuejs.org',
      enLink: 'https://vuejs.org',
      repo: 'vuejs/core'
    },
    {
      name: 'Vue Cli',
      logo: 'https://v3.cn.vuejs.org/logo.png',
      desc: '这是一个描述',
      zhLink: 'https://v3.cn.vuejs.org',
      enLink: 'https://vuejs.org',
      repo: 'vuejs/core'
    },
    {
      name: 'Vue Cli',
      logo: 'https://v3.cn.vuejs.org/logo.png',
      desc: '这是一个描述',
      zhLink: 'https://v3.cn.vuejs.org',
      enLink: 'https://vuejs.org',
      repo: 'vuejs/core'
    },
    {
      name: 'Vue Cli',
      logo: 'https://v3.cn.vuejs.org/logo.png',
      desc: '这是一个描述',
      zhLink: 'https://v3.cn.vuejs.org',
      enLink: 'https://vuejs.org',
      repo: 'vuejs/core'
    },
    {
      name: 'Element Plus',
      logo: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
      desc: '基于 Ant Design 和 Vue 3 的企业级 UI 组件。',
      zhLink: 'https://2x.antdv.com/docs/vue/introduce-cn',
      enLink: 'https://2x.antdv.com/docs/vue/introduce',
      repo: 'vueComponent/ant-design-vue'
    },
    {
      name: 'Element Plus',
      logo: 'https://element-plus.org/images/element-plus-logo.svg',
      desc: '基于 Vue 3，面向设计师和开发者的组件库。',
      zhLink: 'https://element-plus.org/zh-CN',
      enLink: 'https://element-plus.org/en-US',
      repo: 'element-plus/element-plus'
    },
    {
      name: 'Element Plus',
      logo: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
      desc: '基于 Ant Design 和 Vue 3 的企业级 UI 组件。',
      zhLink: 'https://2x.antdv.com/docs/vue/introduce-cn',
      enLink: 'https://2x.antdv.com/docs/vue/introduce',
      repo: 'vueComponent/ant-design-vue'
    },
    {
      name: 'Element Plus',
      logo: 'https://element-plus.org/images/element-plus-logo.svg',
      desc: '基于 Vue 3，面向设计师和开发者的组件库。',
      zhLink: 'https://element-plus.org/zh-CN',
      enLink: 'https://element-plus.org/en-US',
      repo: 'element-plus/element-plus'
    }
  ],
  'Vue3 组件库': [
    {
      name: 'Element Plus',
      logo: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
      desc: '基于 Ant Design 和 Vue 3 的企业级 UI 组件。',
      zhLink: 'https://2x.antdv.com/docs/vue/introduce-cn',
      enLink: 'https://2x.antdv.com/docs/vue/introduce',
      repo: 'vueComponent/ant-design-vue'
    },
    {
      name: 'Element Plus',
      logo: 'https://element-plus.org/images/element-plus-logo.svg',
      desc: '基于 Vue 3，面向设计师和开发者的组件库。',
      zhLink: 'https://element-plus.org/zh-CN',
      enLink: 'https://element-plus.org/en-US',
      repo: 'element-plus/element-plus'
    },
    {
      name: 'Element Plus',
      logo: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
      desc: '基于 Ant Design 和 Vue 3 的企业级 UI 组件。',
      zhLink: 'https://2x.antdv.com/docs/vue/introduce-cn',
      enLink: 'https://2x.antdv.com/docs/vue/introduce',
      repo: 'vueComponent/ant-design-vue'
    },
    {
      name: 'Element Plus',
      logo: 'https://element-plus.org/images/element-plus-logo.svg',
      desc: '基于 Vue 3，面向设计师和开发者的组件库。',
      zhLink: 'https://element-plus.org/zh-CN',
      enLink: 'https://element-plus.org/en-US',
      repo: 'element-plus/element-plus'
    },
    {
      name: 'Element Plus',
      logo: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
      desc: '基于 Ant Design 和 Vue 3 的企业级 UI 组件。',
      zhLink: 'https://2x.antdv.com/docs/vue/introduce-cn',
      enLink: 'https://2x.antdv.com/docs/vue/introduce',
      repo: 'vueComponent/ant-design-vue'
    },
    {
      name: 'Element Plus',
      logo: 'https://element-plus.org/images/element-plus-logo.svg',
      desc: '基于 Vue 3，面向设计师和开发者的组件库。',
      zhLink: 'https://element-plus.org/zh-CN',
      enLink: 'https://element-plus.org/en-US',
      repo: 'element-plus/element-plus'
    }
  ],
  'Vue3 组件库（Mobile）': [
    {
      name: 'Vant',
      logo: 'https://img.yzcdn.cn/vant/logo.png',
      desc: '轻量、可靠的移动端 Vue 组件库。',
      zhLink: 'https://vant-contrib.gitee.io/vant/#/zh-CN',
      enLink: 'https://youzan.github.io/vant/#/en-US',
      repo: 'youzan/vant'
    },
    {
      name: 'Element Plus',
      logo: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
      desc: '基于 Ant Design 和 Vue 3 的企业级 UI 组件。',
      zhLink: 'https://2x.antdv.com/docs/vue/introduce-cn',
      enLink: 'https://2x.antdv.com/docs/vue/introduce',
      repo: 'vueComponent/ant-design-vue'
    },
    {
      name: 'Element Plus',
      logo: 'https://element-plus.org/images/element-plus-logo.svg',
      desc: '基于 Vue 3，面向设计师和开发者的组件库。',
      zhLink: 'https://element-plus.org/zh-CN',
      enLink: 'https://element-plus.org/en-US',
      repo: 'element-plus/element-plus'
    },
    {
      name: 'Element Plus',
      logo: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
      desc: '基于 Ant Design 和 Vue 3 的企业级 UI 组件。',
      zhLink: 'https://2x.antdv.com/docs/vue/introduce-cn',
      enLink: 'https://2x.antdv.com/docs/vue/introduce',
      repo: 'vueComponent/ant-design-vue'
    },
    {
      name: 'Element Plus',
      logo: 'https://element-plus.org/images/element-plus-logo.svg',
      desc: '基于 Vue 3，面向设计师和开发者的组件库。',
      zhLink: 'https://element-plus.org/zh-CN',
      enLink: 'https://element-plus.org/en-US',
      repo: 'element-plus/element-plus'
    },
    {
      name: 'Element Plus',
      logo: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
      desc: '基于 Ant Design 和 Vue 3 的企业级 UI 组件。',
      zhLink: 'https://2x.antdv.com/docs/vue/introduce-cn',
      enLink: 'https://2x.antdv.com/docs/vue/introduce',
      repo: 'vueComponent/ant-design-vue'
    },
    {
      name: 'Element Plus',
      logo: 'https://element-plus.org/images/element-plus-logo.svg',
      desc: '基于 Vue 3，面向设计师和开发者的组件库。',
      zhLink: 'https://element-plus.org/zh-CN',
      enLink: 'https://element-plus.org/en-US',
      repo: 'element-plus/element-plus'
    },
    {
      name: 'Element Plus',
      logo: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
      desc: '基于 Ant Design 和 Vue 3 的企业级 UI 组件。',
      zhLink: 'https://2x.antdv.com/docs/vue/introduce-cn',
      enLink: 'https://2x.antdv.com/docs/vue/introduce',
      repo: 'vueComponent/ant-design-vue'
    },
    {
      name: 'Element Plus',
      logo: 'https://element-plus.org/images/element-plus-logo.svg',
      desc: '基于 Vue 3，面向设计师和开发者的组件库。',
      zhLink: 'https://element-plus.org/zh-CN',
      enLink: 'https://element-plus.org/en-US',
      repo: 'element-plus/element-plus'
    }
  ],
  '打包工具': [
    {
      name: 'Vite',
      logo: 'https://cn.vitejs.dev/logo.svg',
      desc: '下一代前端开发与构建工具。',
      zhLink: 'https://webpack.docschina.org',
      enLink: 'https://vitejs.dev',
      repo: 'vitejs/vite'
    },
    {
      name: 'webpack',
      logo: 'https://camo.githubusercontent.com/b0573f87b0786eda63c76f2a9a1358e7a653783c25c03c6c908a00b70c713d78/68747470733a2f2f7765627061636b2e6a732e6f72672f6173736574732f69636f6e2d7371756172652d6269672e737667',
      desc: '用于现代 JavaScript 应用程序的静态模块打包工具。',
      zhLink: 'https://cn.vitejs.dev',
      enLink: 'https://webpack.js.org',
      repo: 'webpack/webpack'
    },
    {
      name: 'Rollup',
      logo: 'https://www.rollupjs.com/img/twitter-card.jpg',
      desc: '新一代 JavaScript 模块打包器。',
      zhLink: 'https://www.rollupjs.com',
      enLink: 'https://rollupjs.org',
      repo: 'vitejs/vite'
    },
    {
      name: 'webpack',
      logo: 'https://camo.githubusercontent.com/b0573f87b0786eda63c76f2a9a1358e7a653783c25c03c6c908a00b70c713d78/68747470733a2f2f7765627061636b2e6a732e6f72672f6173736574732f69636f6e2d7371756172652d6269672e737667',
      desc: '用于现代 JavaScript 应用程序的静态模块打包工具。',
      zhLink: 'https://cn.vitejs.dev',
      enLink: 'https://webpack.js.org',
      repo: 'webpack/webpack'
    }
  ],
  '打包工具1': [
    {
      name: 'Vite',
      logo: 'https://cn.vitejs.dev/logo.svg',
      desc: '下一代前端开发与构建工具。',
      zhLink: 'https://webpack.docschina.org',
      enLink: 'https://vitejs.dev',
      repo: 'vitejs/vite'
    },
    {
      name: 'webpack',
      logo: 'https://camo.githubusercontent.com/b0573f87b0786eda63c76f2a9a1358e7a653783c25c03c6c908a00b70c713d78/68747470733a2f2f7765627061636b2e6a732e6f72672f6173736574732f69636f6e2d7371756172652d6269672e737667',
      desc: '用于现代 JavaScript 应用程序的静态模块打包工具。',
      zhLink: 'https://cn.vitejs.dev',
      enLink: 'https://webpack.js.org',
      repo: 'webpack/webpack'
    },
    {
      name: 'Rollup',
      logo: 'https://www.rollupjs.com/img/twitter-card.jpg',
      desc: '新一代 JavaScript 模块打包器。',
      zhLink: 'https://www.rollupjs.com',
      enLink: 'https://rollupjs.org',
      repo: 'vitejs/vite'
    },
    {
      name: 'webpack',
      logo: 'https://camo.githubusercontent.com/b0573f87b0786eda63c76f2a9a1358e7a653783c25c03c6c908a00b70c713d78/68747470733a2f2f7765627061636b2e6a732e6f72672f6173736574732f69636f6e2d7371756172652d6269672e737667',
      desc: '用于现代 JavaScript 应用程序的静态模块打包工具。',
      zhLink: 'https://cn.vitejs.dev',
      enLink: 'https://webpack.js.org',
      repo: 'webpack/webpack'
    }
  ],
  '打包工具2': [
    {
      name: 'Vite',
      logo: 'https://cn.vitejs.dev/logo.svg',
      desc: '下一代前端开发与构建工具。',
      zhLink: 'https://webpack.docschina.org',
      enLink: 'https://vitejs.dev',
      repo: 'vitejs/vite'
    },
    {
      name: 'webpack',
      logo: 'https://camo.githubusercontent.com/b0573f87b0786eda63c76f2a9a1358e7a653783c25c03c6c908a00b70c713d78/68747470733a2f2f7765627061636b2e6a732e6f72672f6173736574732f69636f6e2d7371756172652d6269672e737667',
      desc: '用于现代 JavaScript 应用程序的静态模块打包工具。',
      zhLink: 'https://cn.vitejs.dev',
      enLink: 'https://webpack.js.org',
      repo: 'webpack/webpack'
    },
    {
      name: 'Rollup',
      logo: 'https://www.rollupjs.com/img/twitter-card.jpg',
      desc: '新一代 JavaScript 模块打包器。',
      zhLink: 'https://www.rollupjs.com',
      enLink: 'https://rollupjs.org',
      repo: 'vitejs/vite'
    },
    {
      name: 'webpack',
      logo: 'https://camo.githubusercontent.com/b0573f87b0786eda63c76f2a9a1358e7a653783c25c03c6c908a00b70c713d78/68747470733a2f2f7765627061636b2e6a732e6f72672f6173736574732f69636f6e2d7371756172652d6269672e737667',
      desc: '用于现代 JavaScript 应用程序的静态模块打包工具。',
      zhLink: 'https://cn.vitejs.dev',
      enLink: 'https://webpack.js.org',
      repo: 'webpack/webpack'
    },
    {
      name: 'webpack',
      logo: 'https://camo.githubusercontent.com/b0573f87b0786eda63c76f2a9a1358e7a653783c25c03c6c908a00b70c713d78/68747470733a2f2f7765627061636b2e6a732e6f72672f6173736574732f69636f6e2d7371756172652d6269672e737667',
      desc: '用于现代 JavaScript 应用程序的静态模块打包工具。',
      zhLink: 'https://cn.vitejs.dev',
      enLink: 'https://webpack.js.org',
      repo: 'webpack/webpack'
    },
    {
      name: 'Rollup',
      logo: 'https://www.rollupjs.com/img/twitter-card.jpg',
      desc: '新一代 JavaScript 模块打包器。',
      zhLink: 'https://www.rollupjs.com',
      enLink: 'https://rollupjs.org',
      repo: 'vitejs/vite'
    },
    {
      name: 'webpack',
      logo: 'https://camo.githubusercontent.com/b0573f87b0786eda63c76f2a9a1358e7a653783c25c03c6c908a00b70c713d78/68747470733a2f2f7765627061636b2e6a732e6f72672f6173736574732f69636f6e2d7371756172652d6269672e737667',
      desc: '用于现代 JavaScript 应用程序的静态模块打包工具。',
      zhLink: 'https://cn.vitejs.dev',
      enLink: 'https://webpack.js.org',
      repo: 'webpack/webpack'
    }
  ]
}

export default data
