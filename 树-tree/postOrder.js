const bt = require('./binary-tree')

const postOrder = (root) => {
  if (!root) return
  postOrder(root.left)
  postOrder(root.right)
  console.log(root.val)
}
postOrder(bt)