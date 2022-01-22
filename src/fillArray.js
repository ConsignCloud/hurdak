import map from 'ramda/src/map'

export default (length, x) => map(() => x, new Array(length))
