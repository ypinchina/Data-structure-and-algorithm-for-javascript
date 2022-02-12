// 二分查找
function binarySearch(arr, key) {
  let low = 0
  let height = arr.length - 1
  while (low <= height) {
    let mid = Math.floor((low + height) / 2)
    if (arr[mid] < key) {
      low = mid + 1
    } else if (arr[mid] > key) {
      height = mid - 1
    } else {
      return mid
    }
  }
  return -1
}

console.log(binarySearch([1], 1))