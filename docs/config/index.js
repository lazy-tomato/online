import { getSonDirList } from './utils/index'

export const navbar = [
  {
    text: '面试',
    link: '/interView/',
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
}
