import path from 'ramda/src/path'
import assocPath from 'ramda/src/assocPath'
import mergeRight from './mergeRight'
import curryN from './curryN'

export default curryN(3, (p, v, x) => assocPath(p, mergeRight(path(p, x), v), x))
