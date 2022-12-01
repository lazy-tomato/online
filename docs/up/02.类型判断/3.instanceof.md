# instanceof

## start

- 今天把 `instanceof` 给终结在这篇文章上，加油。

## 1. 前置知识

### 1.1 官方文档文档

[MDN 官方说明：](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/instanceof)

### 1.2 英文解释：

- `instance:实例`
- `of：属于`
- `instanceof：实例属于`

## 2. 正文

### 2.1 概念：

instanceof 运算符用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上。

- instanceof：实例属于。
- 构造函数：可以理解就是一个函数。
- prototype 属性：函数上一个属性。
- 原型链：对象可以通过 `__proto__` 属性与上游的构造函数的原型对象连接起来，⽽上游的原型对象也有⼀个 `__proto__` ，这样就形成了原型链。

#### 2.1.1 举个例子:

```js
function Foo() {}

var a = new Foo()

console.log(a instanceof Foo) // true
console.log(a.__proto__ === Foo.prototype) // true
console.log(a instanceof Object) // true
```

`Foo.prototype`
函数上有一个 `prototype` 属性，叫做这个函数的 `原型对象`;

`a.__proto__`
每个对象都有 `__proto__` 属性，此属性指向该对象的构造函数的`原型对象`

#### 2.1.2 个人总结：

看到上述解释的概念，其实可以了解到，`instanceof`就是沿着对象`a`的`__proto__`属性，一直向上寻找`__proto__`。
如果 构造函数的原型对象 在这个链条上，返回 true。

## 2.2 手写一个 instancof

```js
// source instanceof左侧数据
// target instanceof右侧数据

function copyInstanceof(source, target) {
  // 基本数据类型以及 null 直接返回 false
  if (!['function', 'object'].includes(typeof source) || source === null)
    return false

  // getProtypeOf 是 Object 对象自带的一个方法，能够拿到参数的原型对象
  let proto = Object.getPrototypeOf(source)
  while (true) {
    // 查找到尽头，还没找到
    if (proto === null) return false
    // 找到相同的原型对象
    if (proto === target.prototype) return true
    proto = Object.getPrototypeOf(proto)
  }
}
```

## 2.3 instanceof 作用

- instanceof 主要的作用就是判断一个实例是否属于某种类型
- instanceof 也可以判断一个实例是否是其父类型或者祖先类型的实例。

## 2.4 实际案例

`1. 例如：vue源码中 判断用户是否使用 new 关键词调用的函数`

```js
function Vue() {
  if (!(this instanceof Vue)) {

    new throw 'Vue is a constructor and should be called with the `new` keyword'
  }
}
```

## End

- 完结。
