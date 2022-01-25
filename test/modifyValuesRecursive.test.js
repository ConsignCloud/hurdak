import {assert} from 'chai'
import modifyValuesRecursive from 'hurdak/modifyValuesRecursive'

describe('modifyValuesRecursive', () => {
  it('should modify values of an object recursively without modifying keys', () => {
    assert.deepEqual(
      modifyValuesRecursive(x => x === 2, x => x + 1, {x: 1, y: {z: 2}, a: [1, 2, 3]}),
      {x: 1, y: {z: 3}, a: [1, 3, 3]})
  })
})
