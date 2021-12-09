//349. 两个数组的交集 https://leetcode-cn.com/problems/intersection-of-two-arrays/
// 给定两个数组，编写一个函数来计算它们的交集。

// 示例 1：

// 输入：nums1 = [1,2,2,1], nums2 = [2,2]
// 输出：[2]
// 示例 2：

// 输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// 输出：[9,4]

function intersection(nums1: number[], nums2: number[]): number[] {
  let setNum1 = new Set(nums1)
  return [...setNum1].filter(item => nums2.includes(item))
}

// 时间复杂度O(N^2) 空间复杂度O(N)