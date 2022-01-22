import {assert} from 'chai'
import apply from 'hurdak/apply'

describe('apply', () => {
  it('calls the function', () => {
    assert.equal(apply(x => x + 2, [1]), 3)
  })
})
