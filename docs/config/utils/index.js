/*
 * @Author: lazy_tomato
 * @Date: 2022-11-26 16.43.00
 * @LastEditTime: 2022-11-26 16.43.00
 * @LastEditors: lazy_tomato
 * @Description: 自动获取侧边栏信息
 */

import fs from 'fs'
import path from 'path'

export function getSonDirList(selfDirname) {
  var dir = path.resolve(__dirname, '../../', selfDirname)
  var filesList = []

  const files = fs.readdirSync(dir)

  files.forEach((item, index) => {
    filesList.push({
      text: item,
      collapsible: true,
      children: [],
    })

    var fullPath = path.join(dir, item)
    const stat = fs.statSync(fullPath)
    if (stat.isDirectory()) {
      const files = fs.readdirSync(path.resolve(dir, item))
      filesList[index]['children'] = files.map((item2) => {
        console.log('/' + selfDirname + '/' + item + '/' + item2)
        return {
          text: item2.replace('.md', ''),
          link: '/' + selfDirname + '/' + item + '/' + item2,
        }
      })
    }
  })

  return filesList
}
