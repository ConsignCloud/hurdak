import when from 'ramda/src/when'
import always from 'ramda/src/always'
import mapObjIndexed from 'ramda/src/mapObjIndexed'
import curryN from './curryN'

export default curryN(3, (f, v, x) =>
  mapObjIndexed(when(f, always(v)), x))
