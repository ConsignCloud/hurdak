export default (f, xs) => xs.map(f).reduce((a, b) => a.concat(b), [])
