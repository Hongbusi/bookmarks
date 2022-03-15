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
  Vue3: [
    {
      name: 'Vue',
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
  React: [
    {
      name: 'Vue',
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
  Vite: [
    {
      name: 'Vue',
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
  ]
}

export default data
