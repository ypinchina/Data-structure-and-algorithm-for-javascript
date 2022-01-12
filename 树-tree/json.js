const json = {
  a: { b: { c: 1 } },
  d: [1, 2]
}

// 现在需要遍历此json每一个值， 如何操作

// 使用深度优先搜索遍历

const dfs = (root) => {
  Object.keys(root).forEach(item => {
    dfs(root[item])
  })
}
dfs(json)