import {assert} from 'chai'
import forEachObj from 'hurdak/forEachObj'

describe('forEachObj', () => {
  it('should invoke the given function with the correct arguments', () => {
    const obj = {x: 1, y: 2}
    const result = {}

    forEachObj((value, key) => {
      result[key] = value
    }, obj)

    assert.deepEqual(result, obj)
  })
})
