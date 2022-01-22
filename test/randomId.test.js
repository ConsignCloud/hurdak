import {assert} from 'chai'
import randomId from 'hurdak/randomId'

describe('randomId', () => {
  it('generates a numeric string', () => {
    assert.match(randomId(), /^[0-9]+$/)
  })
})
