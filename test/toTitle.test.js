import {assert} from 'chai'
import toTitle from 'hurdak/toTitle'

describe('toTitle', () => {
  it('should handle abominations of all sorts', () => {
    assert.equal(toTitle('DEEF__ huur dee_dumP'), 'Deef Huur Dee Dum P')
    assert.equal(toTitle('30f'), '30f')
    assert.equal(toTitle('30F'), '30 F')
    assert.equal(toTitle(''), '')
  })
})
