// 深度优先遍历算法口诀
// 1. 访问根节点
// 2. 对根节点的没访问过的相邻节点挨个进行访问
const graph = require('./graph')
const visited = new Set()
const dfs = (root) => {
  console.log(root)
  visited.add(root)
  graph[root].forEach(item => {
    if (!visited.has(item)) {
      dfs(item)
    }
  })
}
dfs(2)