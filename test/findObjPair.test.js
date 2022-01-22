import {assert} from 'chai'
import findObjPair from 'hurdak/findObjPair'

describe('findObjPair', () => {
  it('should find the correct pair in an object', () => {
    assert.deepEqual(findObjPair(x => x === 2, {a: 1, b: 2, c: 3}), ['b', 2])
  })
})
