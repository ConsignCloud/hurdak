import {assert} from 'chai'
import closure from 'hurdak/closure'

describe('closure', () => {
  it('does the thing', () => {
    assert.equal(closure(() => 1), 1)
  })
})
