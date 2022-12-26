function Parent(name) {
  this.name = name
  this.hobby = ['lazy', 'tomato']
}

function Child(name) {
  Parent.call(this, name)
}

var child1 = new Child('番茄')

var child2 = new Child('测试')

console.log(child1, child2)
// { name: '番茄', hobby: [ 'lazy', 'tomato' ] }
// { name: '测试', hobby: [ 'lazy', 'tomato' ] }

child1.hobby.push('番茄2')

console.log(child1, child2)
// { name: '番茄', hobby: [ 'lazy', 'tomato', '番茄2' ] }
// { name: '测试', hobby: [ 'lazy', 'tomato' ] }
