import curryN from 'hurdak/curryN'

export default curryN(2, (...xs) => {
  let r = {}

  for (const x of xs) {
    r = {...x, ...r}
  }

  return r
})
