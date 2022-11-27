# 如何发布一个属于自己的 npm 包

## start

- 在日常的工作中，我们会接触很多 npm 包。

- 例如：

  ```shell
  npm install jquery

  npm install @vue/cli

  npm install axios

  # ... 等等
  ```

- 有时候会想到，构建一个属于自己的 npm 包，应该超级酷吧？

## 1. 初始化一个项目

### 1.1 创建一个文件夹，打开对应终端(命令行窗口)

![image-20221127114104807](../../.vuepress/public/bookImages/%E5%A6%82%E4%BD%95%E5%8F%91%E5%B8%83%E4%B8%80%E4%B8%AA%E5%B1%9E%E4%BA%8E%E8%87%AA%E5%B7%B1%E7%9A%84npm%E5%8C%85/image-20221127114104807.png)

### 1.2 初始化 package.json

![image-20221127114233126](../../.vuepress/public/bookImages/%E5%A6%82%E4%BD%95%E5%8F%91%E5%B8%83%E4%B8%80%E4%B8%AA%E5%B1%9E%E4%BA%8E%E8%87%AA%E5%B7%B1%E7%9A%84npm%E5%8C%85/image-20221127114233126.png)

### 1.3 创建一个基础的 index.js 文件

```js
console.log('hello-tomato7')

function sayHello() {
  console.log('hello-tomato7')
}

exports.sayHello = sayHello
// 使用的是 commonjs 规范。
```

![image-20221127114621845](../../.vuepress/public/bookImages/%E5%A6%82%E4%BD%95%E5%8F%91%E5%B8%83%E4%B8%80%E4%B8%AA%E5%B1%9E%E4%BA%8E%E8%87%AA%E5%B7%B1%E7%9A%84npm%E5%8C%85/image-20221127114621845.png)

## 2. 注册账号

访问 npm 的官网： [访问 npm 官网点击这里](https://www.npmjs.com/)。注册一个 npm 账号，并登录。

![image-20221127115041805](../../.vuepress/public/bookImages/%E5%A6%82%E4%BD%95%E5%8F%91%E5%B8%83%E4%B8%80%E4%B8%AA%E5%B1%9E%E4%BA%8E%E8%87%AA%E5%B7%B1%E7%9A%84npm%E5%8C%85/image-20221127115041805.png)

![image-20221127115449553](../../.vuepress/public/bookImages/%E5%A6%82%E4%BD%95%E5%8F%91%E5%B8%83%E4%B8%80%E4%B8%AA%E5%B1%9E%E4%BA%8E%E8%87%AA%E5%B7%B1%E7%9A%84npm%E5%8C%85/image-20221127115449553.png)

> 如果英文比较好，npm 的官网建议多逛逛，可以发现很多优质的 npm 依赖包。

## 3. 命令行中登录我们的 npm 账号

**！！ 需要注意一下，切换我们的下载源为 npm 官方下载源。**

### 3.1 下载源

- 借助工具 ： nrm 切换下载源。
- 可以手动切换；

#### 3.1.1 nrm 切换下载

```shell
# 1. 下载依赖
npm i -g nrm

# 2. 查看下载源列表
nrm ls

# 3. 使用npm官方的下载源。
nrm use npm

# 4. 验证是否切换成功,查看输出的网址是否为我们设置的网址。
npm get registry
```

![image-20221127120526437](../../.vuepress/public/bookImages/%E5%A6%82%E4%BD%95%E5%8F%91%E5%B8%83%E4%B8%80%E4%B8%AA%E5%B1%9E%E4%BA%8E%E8%87%AA%E5%B7%B1%E7%9A%84npm%E5%8C%85/image-20221127120526437.png)

#### 3.1.2 手动切换

```shell
# 1. 使用npm官方的下载源。
npm set registry https://registry.npmjs.org/

# 2. 验证是否切换成功,查看输出的网址是否为我们设置的网址。
npm get registry
```

![image-20221127120735313](../../.vuepress/public/bookImages/%E5%A6%82%E4%BD%95%E5%8F%91%E5%B8%83%E4%B8%80%E4%B8%AA%E5%B1%9E%E4%BA%8E%E8%87%AA%E5%B7%B1%E7%9A%84npm%E5%8C%85/image-20221127120735313.png)

### 3.2 登录

```shell
npm login
```

![image-20221127121039162](../../.vuepress/public/bookImages/%E5%A6%82%E4%BD%95%E5%8F%91%E5%B8%83%E4%B8%80%E4%B8%AA%E5%B1%9E%E4%BA%8E%E8%87%AA%E5%B7%B1%E7%9A%84npm%E5%8C%85/image-20221127121039162.png)

## 4. 推送我们的包

```shell
npm publish

# publish 出版
```

![image-20221127121520287](../../.vuepress/public/bookImages/%E5%A6%82%E4%BD%95%E5%8F%91%E5%B8%83%E4%B8%80%E4%B8%AA%E5%B1%9E%E4%BA%8E%E8%87%AA%E5%B7%B1%E7%9A%84npm%E5%8C%85/image-20221127121520287.png)

![image-20221127121638857](../../.vuepress/public/bookImages/%E5%A6%82%E4%BD%95%E5%8F%91%E5%B8%83%E4%B8%80%E4%B8%AA%E5%B1%9E%E4%BA%8E%E8%87%AA%E5%B7%B1%E7%9A%84npm%E5%8C%85/image-20221127121638857.png)

## 5. 验证是否发布成功

![image-20221127122031726](../../.vuepress/public/bookImages/%E5%A6%82%E4%BD%95%E5%8F%91%E5%B8%83%E4%B8%80%E4%B8%AA%E5%B1%9E%E4%BA%8E%E8%87%AA%E5%B7%B1%E7%9A%84npm%E5%8C%85/image-20221127122031726.png)

> 可以看到上方的截图，本地初始化一个项目，下载属于我自己的 npm 包 `tomato7`，在代码中引用并执行。
>
> 正确输出 `hello-tomato7`

## 6. 如何限制上传的文件

可以看到例如： `vue` 项目，主要暴露了 `dist` 文件，是怎么做到的？

![image-20221127160831256](../../.vuepress/public/bookImages/%E5%A6%82%E4%BD%95%E5%8F%91%E5%B8%83%E4%B8%80%E4%B8%AA%E5%B1%9E%E4%BA%8E%E8%87%AA%E5%B7%B1%E7%9A%84npm%E5%8C%85/image-20221127160831256.png)

**可以借助`package.json`中的 `files` 字段**

```json
  "files": [
    "src",
    "dist"
  ],
```

## 7.关联 github 仓库

**可以借助`package.json`中的 `repository` 字段**

```json
 "repository": {
    "type": "git",
    "url": "https://github.com/lazy-tomato/tomato7"
  },
```

## end

- npm 包的创建就到这里，后续有好的想法，再做补充。
