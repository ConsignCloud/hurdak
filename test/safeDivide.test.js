import {assert} from 'chai'
import safeDivide from 'hurdak/safeDivide'

describe('safeDivide', () => {
  it('divides by 0', () => {
    assert.equal(safeDivide(10, 5), 2)
    assert.equal(safeDivide(10, 0), 0)
  })
})
