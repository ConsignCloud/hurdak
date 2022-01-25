import prop from 'ramda/src/prop'

export default x => prop('constructor', x) === Object
