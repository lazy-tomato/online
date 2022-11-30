/*
 * @Author: lazy_tomato
 * @Date: 2022-11-26 16.43.00
 * @LastEditTime: 2022-11-26 16.43.00
 * @LastEditors: lazy_tomato
 * @Description: 自动获取侧边栏信息
 */

import fs from 'fs'
import path from 'path'

const whiteList = ['README.md']

export function getSonDirList(selfDirname) {
  var dir = path.resolve(__dirname, '../../', selfDirname)
  var filesList = []

  const files = fs.readdirSync(dir)

  files.forEach((item, index) => {
    if (whiteList.indexOf(item) === -1) {
      filesList.push({
        text: item,
        collapsible: true,
        children: [],
      })

      var fullPath = path.join(dir, item)
      const stat = fs.statSync(fullPath)
      if (stat.isDirectory()) {
        const files = fs.readdirSync(path.resolve(dir, item))
        filesList[filesList.length - 1]['children'] = files.map((ele) => {
          return {
            text: ele.replace('.md', ''),
            link: '/' + selfDirname + '/' + item + '/' + ele,
          }
        })
      }
    }
  })

  return filesList
}
