// 215. 数组中的第K个最大元素  https://leetcode-cn.com/problems/kth-largest-element-in-an-array/
// 给定整数数组 nums 和整数 k，请返回数组中第 k 个最大的元素。

// 请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。

// 示例 1:

// 输入: [3,2,1,5,6,4] 和 k = 2
// 输出: 5
// 示例 2:

// 输入: [3,2,3,1,2,4,5,5,6] 和 k = 4
// 输出: 4

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// 构建一个小根堆类来解决这个问题

class MinHeap {
  constructor() {
    // 使用数组来模拟堆
    this.heap = []
  }
  exchangeItem(i, j) {
    // 交换两个堆元素的方法
    let temp = this.heap[i]
    this.heap[i] = this.heap[j]
    this.heap[j] = temp
  }
  getParentIndex(index) {
    // 获取父元素下标的方法
    return (index - 1) >> 1
  }
  itemToTop(index) {
    // 非堆顶元素上移到堆顶元素的方法
    if (!index) return
    const parentIndex = this.getParentIndex(index)
    if (this.heap[parentIndex] > this.heap[index]) {
      this.exchangeItem(parentIndex, index)
      // 与父元素交换之后继续递归调用
      this.itemToTop(parentIndex)
    }
  }
  insert(value) {
    // 插入堆元素
    this.heap.push(value)
    // 插入完成后排序形成小根堆
    this.itemToTop(this.heap.length - 1)
  }
  deleteTop() {
    // 删除堆顶的操作
    this.heap[0] = this.heap.pop()
    this.itemToDown(0)
  }
  getLeftIndex(index) {
    // 获取左子树节点的方法
    return index * 2 + 1
  }
  getRightIndex(index) {
    // 获取右子树节点的方法
    return index * 2 + 2
  }
  itemToDown(index) {
    // 元素从堆顶往堆底移动排序的方法
    const leftIndex = this.getLeftIndex(index)
    const rightIndex = this.getRightIndex(index)
    if (this.heap[leftIndex] < this.heap[index]) {
      this.exchangeItem(leftIndex, index)
      this.itemToDown(leftIndex)
    }
    if (this.heap[rightIndex] < this.heap[index]) {
      this.exchangeItem(rightIndex, index)
      this.itemToDown(rightIndex)
    }
  }
  getHeapTop() {
    // 获取堆根元素的方法
    return this.heap[0]
  }
  getHeapLength() {
    // 获取堆的大小
    return this.heap.length
  }
}

var findKthLargest = function (nums, k) {
  const h = new MinHeap()
  // 创建堆的实例
  nums.forEach(item => {
    // 循环数组并将元素插入堆中
    h.insert(item)
  })
  if (h.getHeapLength() > k) {
    // 不断地删除小堆根顶（最小元素），直到得到第K大的元素出现在堆顶
    h.deleteTop()
  }
  // 返回这个堆顶元素为所求
  return h.getHeapTop()
};

// 时间复杂度为O(nlogK), 因为是一个双重循环，外层是数组的长度n,遍历插入堆，作为内层是堆的排序时间复杂度logK
// 空间复杂度为O(k), k是维护的堆的长度

