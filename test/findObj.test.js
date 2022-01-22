import {assert} from 'chai'
import findObj from 'hurdak/findObj'

describe('findObj', () => {
  it('should find the correct value in an object', () => {
    assert.equal(findObj(x => x === 2, {a: 1, b: 2, c: 3}), 2)
  })
})
