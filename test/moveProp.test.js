import {assert} from 'chai'
import moveProp from 'hurdak/moveProp'

describe('moveProp', () => {
  it('should move a value from one key to another, removing the old key', () => {
    assert.deepEqual(moveProp('x', 'y', {x: 1}), {y: 1})
  })
})
