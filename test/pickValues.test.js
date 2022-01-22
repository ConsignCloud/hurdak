import {assert} from 'chai'
import pickValues from 'hurdak/pickValues'

describe('pickValues', () => {
  it('should return the selected values in the given order', () => {
    assert.deepEqual(pickValues(['a', 'c'], {a: 1, b: 2, c: 3}), [1, 3])
  })
})
