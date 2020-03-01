// promise的三种状态
const PENDING = 'PENDING'
const RESOLVED = 'RESOLVED'
const REJECTED = 'REJECTED'

class MyPromise{
  // executor执行器,立即执行
  constructor(executor){
    // 默认状态
    this.status = PENDING
    this.value = undefined
    this.reason = undefined
    // 成功，失败回调函数
    // 状态只有PENDING才可以更改
    let resolve = (value) => {
      if(this.status === PENDING){
        this.value = value
        this.status = RESOLVED
      }
    }
    let reject = (reason) => {
      if(this.status === PENDING){
        this.reason = reason
        this.status = REJECTED
      }
    }
    // 成功立即执行，存在错误reject手动派发
    try {
      executor(resolve,reject)
    }catch(e){
      reject(e)
    }
  }
  then(onfulfilled, oninject){
    if(this.status === RESOLVED){
      onfulfilled(this.value)
    }
    if(this.status === REJECTED){
      oninject(this.reason)
    }
  }
}

module.exports = MyPromise;