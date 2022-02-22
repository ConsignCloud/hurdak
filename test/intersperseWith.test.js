import {assert} from 'chai'
import {intersperse} from 'ramda'
import intersperseWith from 'hurdak/intersperseWith'

describe('intersperseWith', () => {
  const value = [1, 2, 'whatever', {}, [], 5]

  it('should provide item and index to given function', () => {
    intersperseWith((item, idx) => {
      assert.isDefined(item)
      assert.isTrue(Number.isInteger(idx))
    }, [1])
  })

  it('should intersperse properly', () => {
    assert.deepEqual(intersperseWith(() => 'thing', value), intersperse('thing', value))
  })
})
