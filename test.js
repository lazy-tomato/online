/**
 * 手写 new
 * @param {Function} fn 需要 new 的函数
 */

function myNew() {
  var fn = Array.prototype.shift.call(arguments)

  var obj = {}

  Object.setPrototypeOf(obj, fn.prototype)

  var result = fn.apply(obj, arguments)

  return typeof result === 'function' ? result : obj
}

/* 测试代码 */
// function Tomato(name) {
//   this.name = name
// }
// Tomato.prototype.say = function () {
//   console.log('我叫', this.name)
// }

// var t = myNew(Tomato, 'lazy')

// t.say()
