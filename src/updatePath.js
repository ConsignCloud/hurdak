import path from 'ramda/src/path'
import assocPath from 'ramda/src/assocPath'
import curryN from 'hurdak/curryN'

export default curryN(3, (p, f, x) =>
  // Provide the value at the path, the value's immediate parent, and the root
  // object as context. Return the entire object with the path changed
  assocPath(p, f(path(p, x), path(p.slice(0, -1), x), x), x))
