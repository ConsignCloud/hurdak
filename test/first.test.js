import {assert} from 'chai'
import first from 'hurdak/first'

describe('first', () => {
  it('doesn\'t fail on null', () => {
    assert.equal(first([1]), 1)
    assert.equal(first([]), undefined)
    assert.equal(first(null), undefined)
  })
})
