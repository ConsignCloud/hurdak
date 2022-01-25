import {assert} from 'chai'
import between from 'hurdak/between'

describe('between', () => {
  it('is properly curried', () => {
    assert.isOk(between(1, 3)(2))
    assert.isNotOk(between(1, 3, 3))
  })
})
