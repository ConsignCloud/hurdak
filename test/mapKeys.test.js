import {assert} from 'chai'
import mapKeys from 'hurdak/mapKeys'

describe('mapKeys', () => {
  it('should modify keys of an object without modifying values', () => {
    const value = {x: 1, y: 2}
    const result = mapKeys(key => `$${key}`, value)

    assert.deepEqual(Object.keys(result), ['$x', '$y'])
    assert.equal(result.$x, 1)
    assert.equal(result.$y, 2)
  })
})
