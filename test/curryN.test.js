import {assert} from 'chai'
import curryN from 'hurdak/curryN'

describe('curryN', () => {
  it('should combine multiple sets of arguments and allow overflow', () => {
    let f = curryN(3, (a, b, c, d) => a + b + c)

    f = f(1)

    assert.equal(typeof f, 'function')

    f = f(2)

    assert.equal(typeof f, 'function')
    assert.equal(f(3, 4), 6)
  })
})
