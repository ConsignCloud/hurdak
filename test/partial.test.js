import {assert} from 'chai'
import partial from 'hurdak/partial'

describe('partial', () => {
  it('partially applies any number of arguments', () => {
    assert.equal(partial((a, b, c) => a + b + c, 1, 2)(3), 6)
  })
})
