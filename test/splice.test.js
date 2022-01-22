import {assert} from 'chai'
import splice from 'hurdak/splice'

describe('splice', () => {
  it('should splice properly', () => {
    assert.deepEqual(splice(2, 2, [1, 2, 3, 4, 5]), [1, 2, 5])
  })
})
