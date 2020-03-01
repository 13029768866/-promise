// 从等待态转变成任意状态就固定，不会再改变
let MyPromise = require('./Promise')
let promise = new MyPromise((resolve,reject)=>{
  resolve('成功')
  reject('失败')
})

promise.then(res => {
  console.log(res)
},err => {
  console.log(err)
})