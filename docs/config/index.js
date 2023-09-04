/*
 * @Author: lazy_tomato
 * @Date: 2022-11-27 11.11.00
 * @LastEditTime: 2022-11-27 11.11.00
 * @LastEditors: lazy_tomato
 * @Description: 自动处理菜单的逻辑
 */

import { getSonDirList } from './utils/index'

export const navbar = [
  // {
  //   text: '面试',
  //   link: '/interView/',
  // },
  {
    text: '成长',
    link: '/group/',
  },
  {
    text: '变秃了也变强了',
    link: '/up/',
  },
  {
    text: '打卡',
    link: '/clockIn/',
  },
  // NavbarGroup
  // {
  //   text: 'Group',
  //   children: ['/group/foo.md', '/group/bar.md'],
  // },
  // 字符串 - 页面文件路径
  // '/bar/README.md',
]

/* 侧边栏 */
export const sidebar = {
  '/interView/': getSonDirList('interView'),
  '/group/': getSonDirList('group'),
  '/up/': getSonDirList('up'),
  '/clockIn/': getSonDirList('clockIn'),
}
