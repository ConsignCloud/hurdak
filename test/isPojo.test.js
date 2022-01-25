import {assert} from 'chai'
import isPojo from 'hurdak/isPojo'

describe('isPojo', () => {
  it('should identify objects', () => {
    assert.isTrue(isPojo({}))
    assert.isTrue(isPojo({x: 1}))
  })

  it('should not identify arrays', () => {
    assert.isFalse(isPojo([]))
    assert.isFalse(isPojo([1, 2]))

    const a = []
    a.prop = 1

    assert.isFalse(isPojo(a))
  })

  it('should not identify non-pojos', () => {
    class Thing {}

    assert.isFalse(isPojo(new Thing()))
  })
})
