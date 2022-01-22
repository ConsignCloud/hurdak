import curryN from 'hurdak/curryN'
import mergePath from 'hurdak/mergePath'

export default curryN(2, (k, v, x) => mergePath([k], v, x))
