import {assert} from 'chai'
import bidiHash from 'hurdak/bidiHash'

describe('bidiHash', () => {
  it('is reversible', () => {
    assert.equal(bidiHash(bidiHash(132987)), 132987)
  })
})
