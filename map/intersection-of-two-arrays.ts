//349. 两个数组的交集 https://leetcode-cn.com/problems/intersection-of-two-arrays/
// 给定两个数组，编写一个函数来计算它们的交集。

// 示例 1：

// 输入：nums1 = [1,2,2,1], nums2 = [2,2]
// 输出：[2]
// 示例 2：

// 输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// 输出：[9,4]

// 使用map 字典来解决这个问题
function intersection2 (nums1: number[], nums2: number[]): number[] {
  let map = new Map()
  nums1.forEach(item => map.set(item, true))
  let arr = []
  nums2.forEach(item => {
    if (map.get(item)) {
      arr.push(item)
      map.delete(item)
    }
  })
  return arr
}

// 时间复杂度O(N^2) 空间复杂度O(N)