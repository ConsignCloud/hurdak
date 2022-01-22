import {assert} from 'chai'
import findObjIndex from 'hurdak/findObjIndex'

describe('findObjIndex', () => {
  it('should find the correct key in an object', () => {
    assert.equal(findObjIndex(x => x === 2, {a: 1, b: 2, c: 3}), 'b')
  })
})
