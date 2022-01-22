import path from 'ramda/src/path'
import assocPath from 'ramda/src/assocPath'
import merge from 'hurdak/merge'
import curryN from 'hurdak/curryN'

export default curryN(2, (p, v, x) => assocPath(p, merge(path(p, x), v), x))
