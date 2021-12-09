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

const bfs = (root) => {
  const queue = [root]
  while (queue.length) {
    const rootNode = queue.shift()
    console.log(rootNode.val)
    rootNode.children.forEach(item => {
      queue.push(item)
    })
  }
}
bfs(tree)
