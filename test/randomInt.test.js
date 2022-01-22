import {assert} from 'chai'
import randomInt from 'hurdak/randomInt'

describe('randomInt', () => {
  it('generates a number within the given parameters', () => {
    assert.equal(randomInt(10, 10), 10)
    assert.isBelow(randomInt(10, 1000), 1001)
    assert.isAbove(randomInt(10, 1000), 9)
  })
})
