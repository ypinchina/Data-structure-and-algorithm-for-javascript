// 广度优先遍历算法口诀
// 1. 新建一个队列，把根节点入队
// 2. 把队头出队并访问
// 3. 把队头的没访问过的相邻节点入队
// 4. 重复第二、三部，直到队列为空
const graph = require('./graph')
const visited = new Set()
const bfs = (root) => {
  const arr = []
  arr.push(root)
  visited.add(root)
  while (arr.length) {
    const node = arr.shift()
    console.log(node)
    graph[node].forEach(item => {
      if (!visited.has(item)) {
        arr.push(item)
        visited.add(item)
      }
    })
  }
}
bfs(2)