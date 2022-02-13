// 70. 爬楼梯  https://leetcode-cn.com/problems/climbing-stairs/
// 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。

// 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

// 示例 1：

// 输入：n = 2
// 输出：2
// 解释：有两种方法可以爬到楼顶。
// 1. 1 阶 + 1 阶
// 2. 2 阶
// 示例 2：

// 输入：n = 3
// 输出：3
// 解释：有三种方法可以爬到楼顶。
// 1. 1 阶 + 1 阶 + 1 阶
// 2. 1 阶 + 2 阶
// 3. 2 阶 + 1 阶

// 这题的难点在于很难入手， 只能一开始分析题目 F(1) = 1 ，F(2) = 2, F(3) = 3, F(4) = 5...
// 是不是很像著名的fibonacci数列， 只要求出这个F映射函数就行了

// fibonacci数列用动态规划 ，所以这题也用动态规划


/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n === 1) {
    return 1
  } else {
    let dp0 = 1
    let dp1 = 1
    for (let i = 2; i <= n; i++) {
      let temp = dp0
      dp0 = dp1
      dp1 = dp1 + temp
    }
    return dp1
  }
};
// 时间复杂度O(N), 空间复杂度O(1)
