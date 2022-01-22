import curryN from 'hurdak/curryN'

export default curryN(2, (k, xs) => {
  let r = 0

  for (let i = 0; i < xs.length; i++) {
    r += xs[i][k]
  }

  return r
})
