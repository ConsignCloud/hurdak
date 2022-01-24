import is from 'ramda/src/is'

const DOT_REGEXP = new RegExp(/\.+/)

const _parseFloat = (x, fallback = 0) => {
  if (is(String, x) && !isNaN(x)) {
    return parseFloat(x)
  }

  x = parseFloat(x.toString().replace(DOT_REGEXP, '.').trim())

  return isNaN(x) ? fallback : x
}

const _parseInt = (x, fallback = 0) =>
  parseInt(_parseFloat(x, fallback), 10)

export default {
  parseFloat: _parseFloat,
  parseInt: _parseInt,
}
