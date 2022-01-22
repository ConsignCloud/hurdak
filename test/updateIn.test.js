import {assert} from 'chai'
import updateIn from 'hurdak/updateIn'

describe('updateIn', () => {
  const obj = {x: {y: {z: 1}}, y: {z: 2}, z: 3}

  it('should provide value and parent, but not root as context', () => {
    // parent always === rootObj for updateIn, this is different from updatePath
    updateIn('z', (value, parent, rootObj) => {
      assert.equal(value, 3)
      assert.deepEqual(parent, obj)
      assert.isUndefined(rootObj)
    }, obj)
  })

  it('should set returned value to the object at the given key', () => {
    assert.deepEqual(updateIn('z', () => 4, obj), {...obj, z: 4})
  })
})
