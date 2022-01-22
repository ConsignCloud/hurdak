import {assert} from 'chai'
import initArray from 'hurdak/initArray'

describe('initArray', () => {
  it('should populate array with given length using given function', () => {
    assert.deepEqual(initArray(3, () => 1), [1, 1, 1])
  })
})
