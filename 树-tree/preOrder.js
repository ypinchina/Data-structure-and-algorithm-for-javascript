const bt = require('./binary-tree')
const preOrder = (root) => {
  if (!root) return
  console.log(root.val)
  preOrder(root.left)
  preOrder(root.right)
}
preOrder(bt)