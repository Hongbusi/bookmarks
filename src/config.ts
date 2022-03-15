export interface IDoc {
  logo: string
  name: string
  desc: string
  zhLink: string
  enLink: string
  gitHubLink: string
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
      gitHubLink: 'https://github.com/vuejs/core'
    },
    {
      name: 'Vue Cli',
      logo: 'https://v3.cn.vuejs.org/logo.png',
      desc: '这是一个描述',
      zhLink: 'https://v3.cn.vuejs.org',
      enLink: 'https://vuejs.org',
      gitHubLink: 'https://github.com/vuejs/core'
    },
    {
      name: 'Vue Cli',
      logo: 'https://v3.cn.vuejs.org/logo.png',
      desc: '这是一个描述',
      zhLink: 'https://v3.cn.vuejs.org',
      enLink: 'https://vuejs.org',
      gitHubLink: 'https://github.com/vuejs/core'
    },
    {
      name: 'Vue Cli',
      logo: 'https://v3.cn.vuejs.org/logo.png',
      desc: '这是一个描述',
      zhLink: 'https://v3.cn.vuejs.org',
      enLink: 'https://vuejs.org',
      gitHubLink: 'https://github.com/vuejs/core'
    }
  ],
  'Vue3 组件库': [
    {
      name: 'Element Plus',
      logo: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
      desc: '基于 Ant Design 和 Vue 3 的企业级 UI 组件。',
      zhLink: 'https://2x.antdv.com/docs/vue/introduce-cn',
      enLink: 'https://2x.antdv.com/docs/vue/introduce',
      gitHubLink: 'https://github.com/vueComponent/ant-design-vue'
    },
    {
      name: 'Element Plus',
      logo: 'https://element-plus.org/images/element-plus-logo.svg',
      desc: '基于 Vue 3，面向设计师和开发者的组件库。',
      zhLink: 'https://element-plus.org/zh-CN',
      enLink: 'https://element-plus.org/en-US',
      gitHubLink: 'https://github.com/element-plus/element-plus'
    }
  ],
  'Vue3 组件库（Mobile）': [
    {
      name: 'Vant',
      logo: 'https://img.yzcdn.cn/vant/logo.png',
      desc: '轻量、可靠的移动端 Vue 组件库。',
      zhLink: 'https://vant-contrib.gitee.io/vant/#/zh-CN',
      enLink: 'https://youzan.github.io/vant/#/en-US',
      gitHubLink: 'https://github.com/youzan/vant'
    }
  ]
}

export default data
