import {assert} from 'chai'
import doPipe from 'hurdak/doPipe'

describe('doPipe', () => {
  it('calls functions in order and returns result', () => {
    assert.equal(9, doPipe(1, [x => x + 2, x => x * 3]))
  })
})
