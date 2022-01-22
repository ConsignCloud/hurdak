import noopPromise from 'hurdak/noopPromise'

export default p => {
  p.catch(() => undefined)

  return noopPromise
}
