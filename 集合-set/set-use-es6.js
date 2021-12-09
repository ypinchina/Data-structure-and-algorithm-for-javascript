let set1 = new Set()
set1.add(1)
set1.add(5)
set1.add('hello world')
let o = { a: 2, b: 3 }
set1.add(o)


// 删除 
set1.delete(5)

// 集合的遍历
set1.forEach(item => console.log(item))
// for of遍历 keys === values === entries
for (item of set1.entries()) console.log(item)


// 集合与数组的互转

// 集合转数组 传统方法
let arr2 = [...set1]
// 或者 使用from方法
let arr3 = Array.from(set1)

// 数组转集合
let set2 = new Set([1, 2, 5, 'hello world'])

// 求集合交集
let intersection = [...set1].filter(item => set2.has(item))
// 求集合的差集
let difference = [...set1].filter(item => !set2.has(item))