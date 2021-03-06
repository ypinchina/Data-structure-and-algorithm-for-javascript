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
function isValid2(s: string): boolean {
  if (s.length % 2 !== 0) {
    return false
  }
  const map = new Map()
  const stack = []
  map.set('{', '}')
  map.set('[', ']')
  map.set('(', ')')
  for (let i = 0; i < s.length; i++) {
    const head = s[i]
    if (head === '{' || head === '[' || head === '(') {
      stack.push(head)
    } else {
      const tail = stack[stack.length - 1]
      if (map.get(tail) === head) {
        stack.pop()
      } else {
        return false
      }
    }
  }
  return stack.length === 0
};