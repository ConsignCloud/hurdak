import map from 'ramda/src/map'

// Use ramda's map since array initialization is squirrely
export default (length, x) => map(x, new Array(length))
