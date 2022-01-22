import {assert} from 'chai'
import toKebab from 'hurdak/toKebab'

describe('toKebab', () => {
  it('should handle abominations of all sorts', () => {
    assert.equal(toKebab('DEEF__ huur dee_dumP'), 'deef-huur-dee-dum-p')
  })
})
