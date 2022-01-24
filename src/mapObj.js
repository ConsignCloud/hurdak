export default (kf, vf, x) => {
  const r = {}

  for (const k in x) {
    r[kf(k)] = vf(x[k])
  }

  return r
}
