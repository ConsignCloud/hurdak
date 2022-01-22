import {assert} from 'chai'
import switcher from 'hurdak/switcher'

describe('switcher', () => {
  it('selects the correct option', () => {
    assert.equal(switcher('a', {a: 1}), 1)
    assert.equal(switcher('a', {b: 1, default: 2}), 2)
  })
})
