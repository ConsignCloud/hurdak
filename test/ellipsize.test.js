import {assert} from 'chai'
import ellipsize from 'hurdak/ellipsize'

describe('ellipsize', () => {
  it('shortens and ellipsizes', () => {
    assert.equal(ellipsize('So many bugs in my hair', 20), 'So many bugs in my...')
    assert.equal(ellipsize('So many bugs in my hair', 21), 'So many bugs in my hair')
  })
})
