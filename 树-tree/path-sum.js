// 112. 路径总和   https://leetcode-cn.com/problems/path-sum/
// 给你二叉树的根节点 root 和一个表示目标和的整数 targetSum 。判断该树中是否存在 根节点到叶子节点 的路径，这条路径上所有节点值相加等于目标和 targetSum 。如果存在，返回 true ；否则，返回 false 。

// 叶子节点 是指没有子节点的节点。 

// 输入：root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
// 输出：true
// 解释：等于目标和的根节点到叶节点路径如上图所示。

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
 * @param {number} targetSum
 * @return {boolean}
 */

// 算法思想 
//  1.在深度优先遍历的过程中，记录当前路径的节点值的和
// 2. 在叶子节点处，判断当前路径的节点值的和是否等于目标值

// 解题步骤
// 1.深度优先遍历二叉树，在叶子节点处，判断当前路径的节点值的和是否等于
// 目标值，是就返回true
// 2.遍历结束，如果没有匹配，就返回false

var hasPathSum = function (root, targetSum) {
  // 首先写出深度优先搜索遍历
  // 再根据逻辑增加代码内容
  if (!root) return false
  let res = false
  const dfs = (n, length) => {
    if (!n.left && !n.right && targetSum === length) {
      // 当是叶子节点且路径等于目标值时 结束循环
      res = true
      return
    }
    if (n.left) dfs(n.left, length + n.left.val)
    if (n.right) dfs(n.right, length + n.right.val)
  }
  dfs(root, root.val)
  return res
};

// 时间复杂度: O(N), 深度优先最坏情况下会遍历每一个节点，N为树中节点的数量
// 空间复杂度: O(N), 使用执行堆栈来调用递归，最坏情况下是单边树 树高度为N,即是树的节点的数量， 最好情况是二叉树均匀分布在
// 左右子树，树的高度是logN, 空间复杂度最好为O(logN)