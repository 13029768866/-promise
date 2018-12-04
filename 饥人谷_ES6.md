# 饥人谷——ES6

## 一、var-let-const

### 1.1、let特点

1. let有作用范围，只在当前块级作用域（最近{}之间）生效,
2. 临时死区（Temp Dead Zone）不声明就是使用的区域就是临时死区
3. 不可以在同一作用域内重复声明相同变量

### 1.2、const

基本特性和let相同，区别const只可赋值一次，不可重复赋值，且必须在声明时立即赋值。

### 1.3、相关面试题

问题：给ul中每个li绑定点击事件，弹出对应索引

```js
<ul>
    <li>导航1</li>
    <li>导航2</li>
    <li>导航3</li>
    <li>导航4</li>
    <li>导航5</li>
    <li>导航6</li>
</ul>
```

答案：

```js
// es5方法
for (var i = 0; i < liArray.length; i++) {
    (function (j) {
        liArray[j].onclick = function () {
            alert(j)
        }
    })(i)
}
// es6方法
var liArray = document.querySelectorAll('li')
        for (var i = 0; i < liArray.length; i++) {
            let j = i;
            liArray[j].onclick = function () {
                alert(j)
            }
        }
```

思考：代码如下，一共声明了多少个i

```js
 var liArray = document.querySelectorAll('li')
        for (let i = 0; i < liArray.length; i++) {
            liArray[i].onclick = function () {
                alert(i)
            }
        }
```

**let  i = 0声明一个，每次循环开始会依次在循环里声明i0,i1,i2...来接受括号内对应的i的值，i的个数等于循环次数+上let i = 0**

## 二、箭头函数

