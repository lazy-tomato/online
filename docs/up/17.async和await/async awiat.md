


## async函数
1. 函数的返回值为 promise 对象
2. promise 对象的结果由 async 函数执行的返回值决定

## await表达式
await 右侧的表达式一般为 promise 对象, 但也可以是其它的值

1. 如果表达式是 promise 对象, await 返回的是 promise 成功的值
2. 如果表达式是其它值, 直接将此值作为 await 的返回值
3. await 必须写在 async 函数中, 但 async 函数中可以没有 await
4. 如果 await 的 promise 失败了, 代码直接暂停并抛出异常, 需要通过 try...catch 捕获处理
5. await后续的代码，可以理解为 在 await语句返回的 promise 对象的then方法中执行。