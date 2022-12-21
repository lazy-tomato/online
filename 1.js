Function.prototype.bind2 = function (context) {
  // 1.新指向的this
  context = Object(context) || window
  // 2.调用bind2传入的参数
  var args = Array.prototype.slice.call(arguments, 1)
  // 3.调用bind2的函数
  var self = this

  var temp = function () {}

  // 4. 定义一个函数，当做bind2的返回值
  var fn = function () {
    // 5. 返回的函数，获取到的参数
    var args2 = Array.prototype.slice.call(arguments, 1)

    // self.apply(context, args2.concat(args))
    // 6. 处理new的情况
    self.apply(this instanceof temp ? this : context, args2.concat(args))
  }

  // 7. 处理一下 fn的原型和this的原型
  temp.prototype = this.prototype
  fn.prototype = new temp()

  return fn
}

function swq() {
  // console.log(1, this.name)
}

var f = swq.bind2({ name: 'swq' })

var s = new f()
// console.log(s)
