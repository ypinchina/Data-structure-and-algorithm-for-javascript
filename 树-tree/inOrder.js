const bt = require('./binary-tree')
const inOrder = (root) => {
  if (!root) return
  inOrder(root.left)
  console.log(root.val)
  inOrder(root.right)
}
inOrder(bt)