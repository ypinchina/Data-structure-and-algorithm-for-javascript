// 20. 有效的括号 https://leetcode-cn.com/problems/valid-parentheses/
// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

// 有效字符串需满足：

// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
 

// 示例 1：

// 输入：s = "()"
// 输出：true
// 示例 2：

// 输入：s = "()[]{}"
// 输出：true
// 示例 3：

// 输入：s = "(]"
// 输出：false
// 示例 4：

// 输入：s = "([)]"
// 输出：false
// 示例 5：

// 输入：s = "{[]}"
// 输出：true
function isValid(s: string): boolean {
  if (s.length%2 === 1) {
    return false
  }
  const arr = []
  for (let i = 0; i < s.length; i++) {
    const c = s[i]
    if (c === '(' || c === '[' || c === '{') {
      arr.push(c)
    } else {
      const t = arr[arr.length - 1]
      if (c === '}' && t === '{' || c === ')' && t === '(' || c === ']' && t === '[') {
        arr.pop()
      } else {
        return false
      }
    }
  }
  return arr.length === 0
};