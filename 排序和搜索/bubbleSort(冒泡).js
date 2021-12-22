// 冒泡排序 n个数，需要排列
// 1. 比较所有相邻元素，如果第一个比第二个大，则交换他们
// 2. 每一轮下来，至少能保证最后一个数是最大的
// 3. 需要n-1轮即可完成排序（倒数第二轮即可排完，最后一轮不再需要排）

const arr = [22, 5, 67, 223, 52, 14, 332, 35]
function bubbleSort(arr) {
  let temp = null
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        temp = arr [j]
        arr[j] = arr[j + 1]
        arr[ j+ 1] = temp
      }
    }
  }
  return arr
}
bubbleSort(arr)

// 时间复杂度O(n^2)