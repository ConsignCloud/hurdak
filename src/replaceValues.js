import when from 'ramda/src/when'
import always from 'ramda/src/always'
import mapObjIndexed from 'ramda/src/mapObjIndexed'
import curryN from 'hurdak/curryN'

export default curryN(2, (f, v, x) =>
  mapObjIndexed(when(f, always(v)), x))
