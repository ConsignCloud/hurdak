import {assert} from 'chai'
import switcherFn from 'hurdak/switcherFn'

describe('switcherFn', () => {
  it('selects the right branch', () => {
    assert.equal(switcherFn('a', {a: () => 1}), 1)
    assert.equal(switcherFn('a', {default: () => 2}), 2)
  })
})
