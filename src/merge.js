import curryN from './curryN'

export default curryN(2, (...xs) => {
  let r = {}

  for (const x of xs) {
    r = {...r, ...x}
  }

  return r
})
