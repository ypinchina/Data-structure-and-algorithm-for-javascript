// 2. 两数相加  https://leetcode-cn.com/problems/add-two-numbers/
// 给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。

// 请你将两个数相加，并以相同形式返回一个表示和的链表。

// 你可以假设除了数字 0 之外，这两个数都不会以 0 开头。

// 示例 1：

// 输入：l1 = [2,4,3], l2 = [5,6,4]
// 输出：[7,0,8]
// 解释：342 + 465 = 807.
// 示例 2：

// 输入：l1 = [0], l2 = [0]
// 输出：[0]
// 示例 3：

// 输入：l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// 输出：[8,9,9,9,0,0,0,1]

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

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  let p1 = l1
  let p2 = l2
  let l3 = new ListNode(0)
  let p3 = l3
  let carry = 0
  while (p1 || p2) {
    const p1Val = p1 ? p1.val : 0
    const p2Val = p2 ? p2.val : 0
    const LinkVal = p1Val + p2Val + carry
    carry = Math.floor(LinkVal / 10)
    p3.next = new ListNode(LinkVal % 10)
    if (p1) p1 = p1.next
    if (p2) p2 = p2.next
    p3 = p3.next
  }
  if (carry) {
    p3.next = new ListNode(carry)
  }
  return l3.next
};
// 时间复杂度为O(n)，空间复杂度O(n) n为两个链表的较长者