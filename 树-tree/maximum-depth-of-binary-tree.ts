// 104. 二叉树的最大深度https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/ 给定一个二叉树，找出其最大深度。

// 二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。

// 说明: 叶子节点是指没有子节点的节点。

// 示例：
// 给定二叉树 [3,9,20,null,null,15,7]，

//     3
//    / \
//   9  20
//     /  \
//    15   7
// 返回它的最大深度 3 。

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
var maxDepth = function (root) {
  let res = 0
  const getDepth = (root, l) => {
    if (!root) return
    if (!root.left && !root.right) {
      res = Math.max(res, l)
    }
    getDepth(root.left, l + 1)
    getDepth(root.right, l + 1)
  }
  getDepth(root, 1)
  return res
};


// 解题思路
// 1.求最大深度，考虑使用深度优先遍历
// 2.在深度优先遍历过程中，记录每个节点所在的层级，找出最大层级即可

// 解题步骤
// 1.新建一个变量res，记录最大深度
// 2.深度优先遍历整棵树，并记录每个节点的层级，同时不断刷新最大深度这个变量
// 3.遍历结束返回最大深度这个变量

// 时空分析
// 时间复杂度：O（n）， n为整棵树的节点数
// 空间复杂度：最好O（log n） 即二叉树尽可能地排满左右，最坏O（n） 单边二叉树，只排左或者右子树的情况， n为整棵树的节点数

