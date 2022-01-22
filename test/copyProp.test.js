import {assert} from 'chai'
import copyProp from 'hurdak/copyProp'

describe('copyProp', () => {
  it('should copy a value from one key to another, leaving the old key intact', () => {
    assert.deepEqual(copyProp('x', 'y', {x: 1}), {x: 1, y: 1})
  })
})
