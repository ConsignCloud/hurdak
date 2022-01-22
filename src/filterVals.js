export default (f, x) => {
  const r = {}

  for (const k in x) {
    if (f(x[k])) {
      r[k] = x[k]
    }
  }

  return r
}
