import {assert} from 'chai'
import chunk from 'hurdak/chunk'

describe('chunk', () => {
  it('should handle no elements', () => {
    assert.deepEqual(chunk(2, []), [])
  })

  it('should handle 1 element with chunkLength = 1', () => {
    assert.deepEqual(chunk(2, [1]), [[1]])
  })

  it('should handle an even number of elements with chunkLength = 1', () => {
    assert.deepEqual(chunk(2, [1, 2, 3, 4]), [[1, 2], [3, 4]])
  })

  it('should handle an odd number of elements with chunkLength = 1', () => {
    assert.deepEqual(chunk(2, [1, 2, 3, 4, 5]), [[1, 2], [3, 4], [5]])
  })

  it('should handle a different chunkLength', () => {
    assert.deepEqual(chunk(3, [1, 2, 3, 4]), [[1, 2, 3], [4]])
  })
})
