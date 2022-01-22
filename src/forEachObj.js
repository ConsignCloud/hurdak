export default (f, x) => Object.entries(x).forEach(([k, v]) => f(v, k))
