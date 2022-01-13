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

let h = new MinHeap()
h.insert(3)
h.insert(2)
h.insert(1)
h.insert(4)
h.deleteTop()