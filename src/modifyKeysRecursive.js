import is from 'ramda/src/is'
import curryN from './curryN'
import isObject from './isObject'
import mapObj from './mapObj'

const modifyKeysRecursive = curryN(2, (f, x) => {
  if (is(Array, x)) {
    return x.map(v => modifyKeysRecursive(f, v))
  }

  if (isObject(x)) {
    return mapObj(f, v => modifyKeysRecursive(f, v), x)
  }

  return x
})

export default modifyKeysRecursive
