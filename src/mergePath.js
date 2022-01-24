import path from 'ramda/src/path'
import assocPath from 'ramda/src/assocPath'
import merge from './merge'
import curryN from './curryN'

export default curryN(3, (p, v, x) => assocPath(p, merge(path(p, x), v), x))
