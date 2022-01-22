import clone from 'ramda/src/clone'
import curryN from 'hurdak/curryN'

export default curryN(2, (ks, x) => {
  const r = {}

  for (let i = 0; i < ks.length; i++) {
    r[ks[i]] = clone(x)
  }

  return r
})
