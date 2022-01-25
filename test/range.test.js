import {assert} from 'chai'
import range from 'hurdak/range'

describe('range', () => {
  it('works with multiple steps', () => {
    assert.deepEqual(range(1, 1), [])
    assert.deepEqual(range(1, 2), [1])
    assert.deepEqual(range(1, 3), [1, 2])
    assert.deepEqual(range(6, 9, 2), [6, 8])
  })
})
