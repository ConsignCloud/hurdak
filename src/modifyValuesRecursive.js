import is from 'ramda/src/is'
import isPojo from './isPojo'
import curryN from './curryN'
import mapValues from './mapValues'

const modifyValuesRecursive = curryN(3, (match, modify, x) => {
  if (match(x)) {
    return modify(x)
  }

  if (is(Array, x)) {
    return x.map(modifyValuesRecursive(match, modify))
  }

  // Only recur into pojos
  if (isPojo(x)) {
    return mapValues(modifyValuesRecursive(match, modify), x)
  }

  return x
})

export default modifyValuesRecursive
