import {assert} from 'chai'
import thrower from 'hurdak/thrower'

describe('thrower', () => {
  it('throws stuff', () => {
    assert.throws(thrower('hi'), 'hi')
  })
})
