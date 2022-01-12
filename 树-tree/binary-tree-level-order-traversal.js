//102. 二叉树的层序遍历 https://leetcode-cn.com/problems/binary-tree-level-order-traversal/
// 给你二叉树的根节点 root ，返回其节点值的 层序遍历 。 （即逐层地，从左到右访问所有节点）。

// 思想 树的层次遍历即是树的广度优先搜索遍历
// 解题步骤
/**
 * 1. 广度优先遍历二叉树
 * 2. 遍历过程中，记录每个节点的层级，并将其添加到不同的数组中
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return []
  const queue = [[root, 0]]
  const res = []
  while (queue.length) {
    const [node, level] = queue.shift()
    if (!res[level]) {
      res[level] = []
    }
    res[level].push(node.val)
    if (node.left) queue.push([node.left, level + 1])
    if (node.right) queue.push([node.right, level + 1])
  }
  return res
};