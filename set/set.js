// 集合：一般用处
// 1. 去重
let arr = [1,1,2,2]
let brr = [...new Set(arr)]

// 2.集合中是否含有某个元素 .has方法

let crr = new Set([1,2])
let result = crr.has(3)

// 3.交集
let b = new Set([1,2,3])
let c = new Set([1,2,4,5].filter(item => {
  return b.has(item)
}))