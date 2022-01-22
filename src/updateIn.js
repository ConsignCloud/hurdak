import updatePath from 'hurdak/updatePath'
import curryN from 'hurdak/curryN'

export default curryN(2, (k, f, x) => updatePath([k], (v, p) => f(v, p), x))
