import is from 'ramda/src/is'

export default x => is(Object, x) && !is(Array, x)
