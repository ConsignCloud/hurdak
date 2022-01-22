import {assert} from 'chai'
import toScreamingSnake from 'hurdak/toScreamingSnake'

describe('toScreamingSnake', () => {
  it('should handle abominations of all sorts', () => {
    assert.equal(toScreamingSnake('DEEF__ huur dee-dumP'), 'DEEF_HUUR_DEE_DUM_P')
  })
})
