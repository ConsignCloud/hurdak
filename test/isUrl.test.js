import {assert} from 'chai'
import isUrl from 'hurdak/isUrl'

describe('isUrl', () => {
  it('works with various numbers of items', () => {
    assert.isFalse(isUrl(1))
    assert.isFalse(isUrl('bananas'))
    assert.isFalse(isUrl('bananas.dude'))
    assert.isTrue(isUrl('http://bananas.dude'))
  })
})
