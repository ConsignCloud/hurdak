import {assert} from 'chai'
import invert from 'hurdak/invert'

describe('invert', () => {
  it('should invert nested arrays properly', () => {
    assert.deepEqual(invert([[1, 2], [3, 4]]), [[1, 3], [2, 4]])
  })
})
