import {assert} from 'chai'
import fillKeys from 'hurdak/fillKeys'

describe('fillKeys', () => {
  it('should create an object with the given keys and value', () => {
    assert.deepEqual(fillKeys(['x', 'y'], 1), {x: 1, y: 1})
  })
})
