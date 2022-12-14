选择器的优先级
盒子模型的组成部分
清除浮动的方式有哪些
哪种定位方式会脱离文档流
css 如果实现水平垂直居中
移动端适配方案
html5 和 css3 新增标签
flex 布局常用属性

1. 选择器的优先级

内联样式，优先级 1000
id 选择器，优先级 100
类和伪类，优先级 10
元素选择器，优先级 1
通配选择器，优先级 0

当选择器包含多种选择器时，需要将多种选择器的优先级相加然后进行比较。但是注意，选择器的优先级计算不会超过他的最大数量级，如果选择器的优先级一样，则使用靠后的样式。

2. 盒子模型的组成部分
   content(内容)：盒子的内容，显示文本和图像。
   border(边框)：围绕在内边距和内容外的边框。
   padding(内边距)：清除内容周围的区域，内边距是透明的。
   margin(外边距)：清除边框外的区域，外边距是透明的

3. 清除浮动的方式有哪些

- 使用 clear:both 清除浮动
- 利用伪元素 clearfix 来清除浮动
- overflow 方法的使用
- 双伪元素方法的使用

4. 哪种定位方式会脱离文档流

- float
- position:absolut
- position:fixed

5. css 如果实现水平垂直居中

- position: absolute; (宽高固定可以 0 ； 或者 50%，transform: translate(-50%, -50%);)
- flex
- text-align+line-height
- grid

```css
.box {
  display: grid;
  width: 300px;
  height: 300px;
  justify-content: center;
  align-items: center;
}
```

6. 移动端适配方案
   https://juejin.cn/post/7046169975706353701

7. html5 和 css3 新增标签
   header ：头部标签
   nav ：导航标签
   article :内容标签
   section: 块级标签
   aside :侧边栏标签
   footer：尾部标签

8. flex 布局常用属性
   flex-direction 设置主轴的方向
   justify-content
   align-items
   flex-wrap
   align-contnet 设置侧轴上的子元素的排列方式（多行）

1116 学习 css 主要样式，欠文章一篇
