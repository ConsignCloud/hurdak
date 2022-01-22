import {assert} from 'chai'
import pluralize from 'hurdak/pluralize'

describe('pluralize', () => {
  it('pluralizes stuff', () => {
    assert.equal(pluralize(1, 'thing'), 'thing')
    assert.equal(pluralize(2, 'thing'), 'things')
    assert.equal(pluralize(2, 'thing', 'babies'), 'babies')
  })
})
