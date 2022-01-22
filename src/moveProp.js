import omit from 'ramda/src/omit'
import curryN from 'hurdak/curryN'
import copyProp from 'hurdak/copyProp'

export default curryN(2, (fromKey, toKey, obj) =>
  omit([fromKey], copyProp(fromKey, toKey, obj)))
