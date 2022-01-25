import {assert} from 'chai'
import ffirst from 'hurdak/ffirst'

describe('ffirst', () => {
  it('doesn\'t fail on null', () => {
    assert.equal(ffirst([[1, 3], [2]]), 1)
    assert.equal(ffirst([]), undefined)
    assert.equal(ffirst(null), undefined)
  })
})
