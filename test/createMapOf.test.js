import {assert} from 'chai'
import createMapOf from 'hurdak/createMapOf'

describe('createMapOf', () => {
  it('should create an index from a list', () => {
    assert.deepEqual(
      createMapOf('name', 'value', [{name: 'a', value: 1}, {name: 'b', value: 2}]),
      {a: 1, b: 2}
    )
  })
})
