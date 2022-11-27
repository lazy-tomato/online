/*
 * @Author: lazy_tomato
 * @Date: 2022-11-27 11.11.00
 * @LastEditTime: 2022-11-27 11.11.00
 * @LastEditors: lazy_tomato
 * @Description: vuepress默认读取的配置文件
 */

import { defineUserConfig, defaultTheme } from 'vuepress'
import { tocPlugin } from '@vuepress/plugin-toc'

import { navbar, sidebar } from '../config/index'

export default defineUserConfig({
  lang: 'zh-CN', // 语言
  title: 'tomato', // header区域的标题
  description: '用于记录自己学习笔记的网站。作者：番茄', // 说明
  base: '/',
  dest: './dist',
  head: [['link', { rel: 'icon', href: '/images/logo.png' }]],
  locales: {
    '/': {
      lang: 'zh-CN',
    },
  },
  theme: defaultTheme({
    logo: '/images/logo.png', // header 区域的logo
    repo: 'https://github.com/lazy-tomato/online', // 仓库信息
    repoLabel: 'Github', // 仓库名称
    editLink: false, // 是否启用编辑链接
    lastUpdated: true,
    // subSidebar: 'auto',
    /* 导航菜单 */
    navbar: navbar,

    /* 侧边栏 */
    sidebar: sidebar,
  }),

  plugins: [
    tocPlugin({
      // 配置项
    }),
  ],
})
