import {assert} from 'chai'
import toCamel from 'hurdak/toCamel'

describe('toCamel', () => {
  it('should handle abominations of all sorts', () => {
    assert.equal(toCamel('DEEF__ huur dee_dumP'), 'deefHuurDeeDumP')
  })
})
