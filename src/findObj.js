import curryN from 'hurdak/curryN'
import findObjPair from 'hurdak/findObjPair'

export default curryN(2, (f, x) => (findObjPair(f, x) || [])[1])
