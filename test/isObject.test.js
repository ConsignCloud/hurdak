import {assert} from 'chai'
import isObject from 'hurdak/isObject'

describe('isObject', () => {
  it('should identify objects', () => {
    assert.isTrue(isObject({}))
    assert.isTrue(isObject({x: 1}))
  })

  it('should not identify arrays', () => {
    assert.isFalse(isObject([]))
    assert.isFalse(isObject([1, 2]))

    const a = []
    a.prop = 1

    assert.isFalse(isObject(a))
  })
})
