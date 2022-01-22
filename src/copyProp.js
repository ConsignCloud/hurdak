import curryN from 'hurdak/curryN'

export default curryN(3, (fromKey, toKey, obj) => ({...obj, [toKey]: obj[fromKey]}))
