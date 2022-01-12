// 111. 二叉树的最小深度 https://leetcode-cn.com/problems/minimum-depth-of-binary-tree/
// 给定一个二叉树，找出其最小深度。

// 最小深度是从根节点到最近叶子节点的最短路径上的节点数量。

// 说明：叶子节点是指没有子节点的节点。

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
 * @return {number}
 */
var minDepth = function (root) {
  if (!root) return 0
  const queue = [[root, 1]]
  while (queue.length) {
    let [n, l] = queue.shift()
    if (!n.left && !n.right) {
      return l
    }
    if (n.left) queue.push([n.left, l + 1])
    if (n.right) queue.push([n.right, l + 1])
  }
};

// 解题思路
// 1.求最小深度，考虑使用广度优先遍历
// 2.在广度优先遍历过程中，遇到叶子节点，停止遍历，返回节点层级

// 解题步骤
// 1.广度优先遍历整棵树，并记录每个节点的层级
// 2.遇到叶子节点，返回节点层级，停止遍历

// 时空分析
// 时间复杂度：O（n）， n为整棵树的节点数
// 空间复杂度：O（n）， n为整棵树的节点数

