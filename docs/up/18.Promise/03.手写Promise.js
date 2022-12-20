class Promise {
  constructor(callBack) {
    this.state = 'pending'
    this.value = undefined
    this.reason = undefined
    this.resolveCallBack = []
    this.rejectCallBack = []

    let resolve = (value) => {
      this.state = 'fulfilled'
      this.value = value
      this.resolveCallBack.forEach((fn) => {
        return fn()
      })
    }
    let reject = (reason) => {
      this.state = 'rejected'
      this.reason = reason
      this.rejectCallBack.forEach((fn) => {
        return fn()
      })
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
}

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

Promise.defer = Promise.deferred = function () {
  let dfd = {}
  dfd.promise = new Promise((resolve, reject) => {
    dfd.resolve = resolve
    dfd.reject = reject
  })
  return dfd
}
module.exports = Promise
