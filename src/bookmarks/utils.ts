import type { Bookmarks } from '~/types'

const bookmarks: Bookmarks = [
  {
    name: 'TinyPng',
    icon: 'ting-png',
    desc: 'TinyPNG 使用智能有损压缩技术将您的 WebP, PNG and JPEG 图片的文件大小降低。',
    zhLink: 'https://tinify.cn',
    enLink: 'https://tinypng.com',
    github: ''
  },
  {
    name: 'Can I Use',
    icon: '',
    desc: '提供最新的浏览器支持表，以支持桌面和移动 Web 浏览器上的前端 Web 技术。',
    zhLink: '',
    enLink: 'https://caniuse.com',
    github: ''
  },
  {
    name: 'JSON 在线解析',
    icon: '',
    desc: 'Json 中文提供相关的 Json 解析、验证、格式化、压缩、编辑器以及 Json 与 XML 相互转换等服务。',
    zhLink: 'https://www.json.cn',
    enLink: '',
    github: ''
  }
]

export default {
  order: 3,
  title: '工具类',
  items: bookmarks
}
