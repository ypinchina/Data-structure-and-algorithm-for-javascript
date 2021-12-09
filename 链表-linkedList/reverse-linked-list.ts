// 206. 反转链表 https://leetcode-cn.com/problems/reverse-linked-list/
// 给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。
// 示例 1：
// 输入：head = [1,2,3,4,5]
// 输出：[5,4,3,2,1]
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

 function reverseList(head: ListNode | null): ListNode | null {
  let cur = head
  let pre = null
  while (cur) { 
    const temp = cur.next
    cur.next = pre
    pre = cur
    cur = temp
  }
  return pre
};
// 时间复杂度O(n),空间复杂度O(1)