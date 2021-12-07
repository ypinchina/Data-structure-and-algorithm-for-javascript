const tree = {
  val: 'a',
  children: [
    {
      val: 'b',
      children: [
        {
          val: 'd',
          children: []
        },
        {
          val: 'e',
          children: []
        }
      ]
    },
    {
      val: 'c',
      children: [
        {
          val: 'f',
          children: []
        },
        {
          val: 'g',
          children: []
        }
      ]
    }
  ]
}

// 深度优先搜索遍历算法
const dfs = (root) => {
  if (root) {
    console.log(root.val)
    root.children.forEach(item => dfs(item))
  }
}

dfs(tree)
