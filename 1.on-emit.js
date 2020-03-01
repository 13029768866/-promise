let fs = require('fs');

// 特点: 订阅方和发布方没有任何关系,订阅只管储存,发布只管从存储中调用
let e = {
  _obj: {},
  _cbArr: [],
  // 订阅: 核心思想接受执行函数,统一放入数组
  on(cb){
    this._cbArr.push(cb)
  },
  // 发布时触发on方法
  emit(key, value){
    //  通过对象键值对的方式存储参数
    this._obj[key] = value
    this._cbArr.forEach(method => {
      method(this._obj)
    })
  }
};

e.on(function(obj){
  console.log(obj)
})
e.on(function(obj){
  if(Object.keys(obj).length === 2){
    console.log(obj)
  }
})

// 多个类之间解除耦合关系
fs.readFile('./age.txt','utf8',function(error,data){
  e.emit('age',data)
})
fs.readFile('./name.txt','utf8',function(error,data){
  e.emit('name',data)
})