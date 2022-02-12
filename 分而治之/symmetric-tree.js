// 101. 对称二叉树 https://leetcode-cn.com/problems/symmetric-tree/
// 给你一个二叉树的根节点 root ， 检查它是否轴对称。

// 示例 1：

// 输入：root = [1,2,2,3,4,4,3]
// 输出：true

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
 * @return {boolean}
 */
var isSymmetric = function (root) {
  // 分而治之递归
  if (!root) return true
  const isMirror = (l, r) => {
    if (!l && !r) return true
    if (l && r && l.val === r.val && isMirror(l.left, r.right) && isMirror(l.right, r.left)) {
      return true
    }
    return false
  }
  return isMirror(root.left, root.right)
};

// 时间复杂度O(n), 空间复杂度O(n)