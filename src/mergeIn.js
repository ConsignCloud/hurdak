import curryN from './curryN'
import mergePath from './mergePath'

export default curryN(2, (k, v, x) => mergePath([k], v, x))
