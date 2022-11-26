import { defineUserConfig, defaultTheme } from 'vuepress'

import { navbar, sidebar } from '../config/index'

export default defineUserConfig({
  lang: 'zh-CN', // 语言
  title: '番茄笔记', // header区域的标题
  description: '用于记录自己学习笔记的网站。作者：番茄', // 说明
  base: '/',
  locales: {
    '/': {
      lang: 'zh-CN',
    },
  },
  theme: defaultTheme({
    logo: '/images/logo.png', // header 区域的logo
    repo: 'https://gitlab.com/foo/bar', // 仓库信息
    repoLabel: 'Github', // 仓库名称
    editLink: false, // 是否启用编辑链接
    lastUpdated: true,
    subSidebar: 'auto',
    /* 导航菜单 */
    navbar: navbar,

    /* 侧边栏 */
    sidebar: sidebar,
  }),
})

/* 


{
      '/interView/': [
        {
          text: '1.css',
          collapsible: true,
          children: ['/interView/1.css/1.md', '/interView/2.js/1.md'],
        },
        {
          text: '2.js',
          collapsible: true,
          children: [
            '/reference/bundler/vite.md',
            '/reference/bundler/webpack.md',
          ],
        },
      ],
    }
*/
