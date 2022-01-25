import {assert} from 'chai'
import doto from 'hurdak/doto'

describe('doto', () => {
  it('calls the function on the thing', () => {
    assert.equal(doto(3, x => x + 1), 4)
  })
})
