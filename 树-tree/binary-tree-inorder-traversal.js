// 94. 二叉树的中序遍历 https://leetcode-cn.com/problems/binary-tree-inorder-traversal/
// 给定一个二叉树的根节点 root ，返回它的 中序 遍历。
// 输入：root = [1,null,2,3]
// 输出：[1,3,2]

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
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  // 递归版本 比较简单
  const res = []
  const rec = (n) => {
    // 此方法为常规中序遍历的操作
    if (!n) return
    rec(n.left)
    res.push(n.val)
    rec(n.right)
  }
  rec(root)
  return res
};

var inorderTraversal = function (root) {
  // 迭代版本 比较复杂
  const res = []
  const stack = []
  let p = root
  while (p || stack.length) {
    while (p) {
      stack.push(p)
      p = p.left
    }
    p = stack.pop()
    res.push(p.val)
    p = p.right
  }
  return res
};

// 时间复杂度O(N), 空间复杂度O(N) , N为树的节点数