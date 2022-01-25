import {assert} from 'chai'
import diffArrays from 'hurdak/diffArrays'

describe('diffArrays', () => {
  it('should diff properly', () => {
    assert.deepEqual(diffArrays([1, 2], [2, 3]), [[1], [3], [2]])
  })
})
