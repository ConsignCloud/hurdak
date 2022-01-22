import is from 'ramda/src/is'
import curryN from 'hurdak/curryN'
import isObject from 'hurdak/isObject'
import mapObj from 'hurdak/mapObj'

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
