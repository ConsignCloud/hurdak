import omit from 'ramda/src/omit'
import curryN from 'hurdak/curryN'

export default curryN(2, (a, b, x) => ({...omit([a], x), [b]: x[a]}))
