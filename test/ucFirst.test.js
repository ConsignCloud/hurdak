import {assert} from 'chai'
import ucFirst from 'hurdak/ucFirst'

describe('ucFirst', () => {
  it('should capitalize the first letter in a string', () => {
    assert.equal(ucFirst('hello'), 'Hello')
  })
})
