import {assert} from 'chai'
import ensurePlural from 'hurdak/ensurePlural'

describe('ensurePlural', () => {
  it('should handle lists, objects, and scalars', () => {
    assert.deepEqual(ensurePlural([1, 2]), [1, 2])
    assert.deepEqual(ensurePlural({a: 1}), [{a: 1}])
    assert.deepEqual(ensurePlural(3), [3])
  })
})
