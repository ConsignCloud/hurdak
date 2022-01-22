import {assert} from 'chai'
import toSnake from 'hurdak/toSnake'

describe('toSnake', () => {
  it('should handle abominations of all sorts', () => {
    assert.equal(toSnake('DEEF__ huur dee-dumP'), 'deef_huur_dee_dum_p')
    assert.equal(toSnake('30f'), '30f')
    assert.equal(toSnake('30F'), '30_f')
  })
})
