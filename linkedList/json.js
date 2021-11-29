let json = {
  a: { b: { c: 1 } },
  d: { e: 2 }
}
let path = ['d', 'e']
let p = json
path.forEach(item => {
  p = p[item]
})