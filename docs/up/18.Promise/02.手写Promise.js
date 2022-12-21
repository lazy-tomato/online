function resolvePromise(promise2, x, resolve, reject) {
  if (promise2 === x) {
    throw '不可循环引用'
  }
  let called
  if (x != null && (typeof x === 'object' || typeof x === 'function')) {
    try {
      let then = x.then

      if (typeof then === 'function') {
        then.call(
          x,
          (res) => {
            if (called) return
            called = true
            resolvePromise(promise2, res, resolve, reject)
          },
          (err) => {
            if (called) return
            called = true
            reject(err)
          }
        )
      } else {
        resolve(x)
      }
    } catch (error) {
      if (called) return
      called = true

      reject(error)
    }
  } else {
    resolve(x)
  }
}

class Promise {
  constructor(callBack) {
    this.state = 'pending'
    this.value = undefined
    this.reason = undefined
    this.resolveCallBack = []
    this.rejectCallBack = []

    let resolve = (value) => {
      if (this.state === 'pending') {
        this.state = 'fulfilled'
        this.value = value
        this.resolveCallBack.forEach((fn) => {
          return fn()
        })
      }
    }
    let reject = (reason) => {
      if (this.state === 'pending') {
        this.state = 'rejected'
        this.reason = reason
        this.rejectCallBack.forEach((fn) => {
          return fn()
        })
      }
    }

    try {
      callBack(resolve, reject)
    } catch (error) {
      reject(error)
    }
  }

  then(onFulfilled, onRejected) {
    onFulfilled =
      typeof onFulfilled === 'function' ? onFulfilled : (value) => value
    onRejected =
      typeof onRejected === 'function'
        ? onRejected
        : (err) => {
            throw err
          }

    var promise2 = new Promise((resolve, reject) => {
      if (this.state === 'fulfilled') {
        setTimeout(() => {
          try {
            let x = onFulfilled(this.value)
            resolvePromise(promise2, x, resolve, reject)
          } catch (error) {
            reject(error)
          }
        }, 0)
      }

      if (this.state === 'rejected') {
        setTimeout(() => {
          try {
            let x = onRejected(this.reason)
            resolvePromise(promise2, x, resolve, reject)
          } catch (error) {
            reject(error)
          }
        }, 0)
      }

      if (this.state === 'pending') {
        this.resolveCallBack.push(() => {
          setTimeout(() => {
            try {
              let x = onFulfilled(this.value)
              resolvePromise(promise2, x, resolve, reject)
            } catch (error) {
              reject(error)
            }
          }, 0)
        })

        this.rejectCallBack.push(() => {
          setTimeout(() => {
            try {
              let x = onRejected(this.reason)
              resolvePromise(promise2, x, resolve, reject)
            } catch (error) {
              reject(error)
            }
          }, 0)
        })
      }
    })

    return promise2
  }

  catch(reject) {
    return this.then(null, reject)
  }

  finally(fn) {
    return this.then(
      (data) => {
        fn()
        return data
      },
      (reason) => {
        fn()
        throw reason
      }
    )
  }

  static resolve(value) {
    if (value instanceof Promise) {
      return value
    } else {
      return new Promise((resolve, reject) => {
        resolve(value)
      })
    }
  }

  static reject(reason) {
    if (reason instanceof Promise) {
      return reason
    } else {
      return new Promise((resolve, reject) => {
        reject(reason)
      })
    }
  }

  static all(args) {
    let results = []
    let i = 0 // 正确结果数量
    let iteratorIndex = -1 // 遍历索引，初始值为-1，遍历时从0开始

    return new Promise((resolve, reject) => {
      for (const item of args) {
        iteratorIndex += 1
        Promise.resolve(item)
          .then((res) => {
            results[iteratorIndex] = res
            i++
            if (i === iteratorIndex + 1) {
              resolve(results)
            }
          })
          .catch((err) => {
            reject(err)
          })
      }
    })
  }

  static allSettled(args) {
    let results = []
    let i = 0 // 正确结果数量
    let iteratorIndex = -1 // 遍历索引，初始值为-1，遍历时从0开始

    return new Promise((resolve, reject) => {
      for (const item of args) {
        iteratorIndex += 1
        Promise.resolve(item)
          .then((res) => {
            results[iteratorIndex] = res
            i++
            if (i === iteratorIndex + 1) {
              resolve(results)
            }
          })
          .catch((err) => {
            results[iteratorIndex] = res
            i++
            if (i === iteratorIndex + 1) {
              resolve(results)
            }
          })
      }
    })
  }

  static race = (args) => {
    return new Promise((resolve, reject) => {
      for (const item of args) {
        Promise.resolve(item)
          .then((res) => {
            resolve(res)
          })
          .catch((err) => {
            reject(err)
          })
      }
    })
  }
}

Promise.defer = Promise.deferred = function () {
  let dfd = {}
  dfd.promise = new Promise((resolve, reject) => {
    dfd.resolve = resolve
    dfd.reject = reject
  })
  return dfd
}
module.exports = Promise
