//  观察者和被观察者存在关联
//  被观察者状态发生变化时,许通知所有观察者

// 观察者
class Observer {
  constructor(name){
    this.name = name    
  }
  // 被观察者状态发生变化会调用此方法
  update(s) {
    console.log(`${this.name}:${s.name}当前状态是${s.state}`)
  }
}

// 被观察者
class Subject {
  constructor(name) {
    this.name = name
    this.state = 'happy'
    this.observers = []
  }
  // 通过注册与观察者产生联系
  attch(o) {
    this.observers.push(o)
  }
  setState(state){
    // 更新观察者状态
    this.state = state
    // 通知所有所有观察者
    this.observers.forEach(o => {
      o.update(this)
    })
  }
}

let baby = new Subject('baby')
let dad = new Observer('dad')
let mom = new Observer('mom')
baby.attch(dad)
baby.attch(mom)
baby.setState('sad')