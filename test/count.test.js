import {assert} from 'chai'
import count from 'hurdak/count'

describe('count', () => {
  it('should return the correct length of an object', () => {
    assert.equal(count({a: 1, b: 2}), 2)
    assert.equal(count({}), 0)
  })
})
