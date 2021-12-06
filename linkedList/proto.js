// 原型链相关知识
let object = {}
let fun = () => { }
let arr = []

object.__proto__ === Object.prototype // true
object.__proto__.__proto__ === null // true
fun.__proto__ === Function.prototype // true
fun.__proto__.__proto__ === Object.prototype // true
arr.__proto__ === Array.prototype // true
arr.__proto__.__proto__ === Object.prototype // true


// 原型链知识点

// 1. 如果A沿着原型链能找到B.prototype,那么A instanceof B 为true


// 使用场景 
arr instanceof Array  // true  用于判断是否为数组
arr instanceof Object // true
fun instanceof Function // true

// 2. 如果在A对象上没有找到x属性，那么会去沿着原型链去找x属性

Function.prototype.x = 'x'

fun.x === 'x' // true



// 面试题 笔试

// 手写实现instanceof

const instanceOf = (A, B) => {
  let p = A
  while (p) {
    if (p.__proto__ !== B.prototype) {
      p = p.__proto__
    } else {
      return true
    }
  }
  return false
}