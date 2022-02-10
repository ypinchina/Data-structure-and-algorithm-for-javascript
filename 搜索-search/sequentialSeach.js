// 顺序搜索
Array.prototype.sequentialSearch = function (key) {
  for (let i = 0; i < this.length; i++) {
    if (this[i] === key) {
      return i 
    }
  }
  return -1
}

console.log([1,2,3,6,7].sequentialSearch(2))

// 时间复杂度为O(N) N为数组长度