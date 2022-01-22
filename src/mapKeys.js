import curryN from 'hurdak/curryN'
import mapObj from 'hurdak/mapObj'

export default curryN(2, (f, x) => mapObj(f, a => a, x))
