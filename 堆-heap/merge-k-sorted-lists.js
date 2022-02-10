// 23. 合并K个升序链表 https://leetcode-cn.com/problems/merge-k-sorted-lists/
// 给你一个链表数组，每个链表都已经按升序排列。

// 请你将所有链表合并到一个升序链表中，返回合并后的链表。

// 示例 1：

// 输入：lists = [[1, 4, 5], [1, 3, 4], [2, 6]]
// 输出：[1, 1, 2, 3, 4, 4, 5, 6]
// 解释：链表数组如下：
// [
//   1 -> 4 -> 5,
//   1 -> 3 -> 4,
//   2 -> 6
// ]
// 将它们合并到一个有序链表中得到。
// 1 -> 1 -> 2 -> 3 -> 4 -> 4 -> 5 -> 6
// 示例 2：

// 输入：lists = []
// 输出：[]

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  const myFlat = (arr) => {
    const isArr = arr.some(item => item instanceof Array)
    if (isArr) {
      let brr = Array.prototype.concat.call([], ...arr)
      return myFlat(brr)
    }
    return arr
  }
  let a = myFlat(lists)
  console.log(a)
};
let brr = [[1, 2, 3], [5, 6], [6, 4, 1]]
mergeKLists(brr)