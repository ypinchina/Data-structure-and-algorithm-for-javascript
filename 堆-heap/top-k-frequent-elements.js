// 347. 前 K 个高频元素  https://leetcode-cn.com/problems/top-k-frequent-elements/
// 给你一个整数数组 nums 和一个整数 k ，请你返回其中出现频率前 k 高的元素。你可以按 任意顺序 返回答案。

// 示例 1:

// 输入: nums = [1,1,1,2,2,3], k = 2
// 输出: [1,2]
// 示例 2:

// 输入: nums = [1], k = 1
// 输出: [1]


// 提示：

// 1 <= nums.length <= 105
// k 的取值范围是 [1, 数组中不相同的元素的个数]
// 题目数据保证答案唯一，换句话说，数组中前 k 个高频元素的集合是唯一的


// 进阶：你所设计算法的时间复杂度 必须 优于 O(n log n) ，其中 n 是数组大小。

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */


// 先使用字典的方法解决
var topKFrequent = function (nums, k) {
  const map = new Map()
  // 新建一个字典
  nums.forEach(item => {
    // 遍历数组nusm并统计到map里，如果有则数量+1，没有则设置为1
    map.has(item) ? map.set(item, map.get(item) + 1) : map.set(item, 1)
  })
  // 升序排序统计次数的字典
  const arr = Array.from(map).sort((a, b) => b[1] - a[1])
  // 截取前K次的次数并返回定应元素的数组
  return arr.slice(0, k).map(item => item[0])
};
// 但是这种写法时间复杂度 大于 nlogn
// 使用这种解法是无法达到小于nlogn时间复杂度的要求的


// 所以使用小根堆的方法尝试

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
    if (this.heap[parentIndex] && this.heap[parentIndex].value > this.heap[index].value) {
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
    if (this.heap[leftIndex] && this.heap[leftIndex].value < this.heap[index].value) {
      this.exchangeItem(leftIndex, index)
      this.itemToDown(leftIndex)
    }
    if (this.heap[rightIndex] && this.heap[rightIndex].value < this.heap[index].value) {
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


var topKFrequent = function (nums, k) {
  const h = new MinHeap()
  const map = new Map()
  nums.forEach(item => {
    // 遍历数组nusm并统计到map里，如果有则数量+1，没有则设置为1
    map.has(item) ? map.set(item, map.get(item) + 1) : map.set(item, 1)
  })
  map.forEach((value, key) => {
    // 遍历插入到小根堆里
    h.insert({value, key})
    if (h.getHeapLength() > k) {
    // 删除堆顶元素
      h.deleteTop()
    }
  })
  // 得到所求对应元素的数组
  return h.heap.map(item => item.key)
};

// 这种时间复杂度为 O(nlogk), 小于要求的时间复杂度值
// 空间复杂度使用了字典最差为O(n)