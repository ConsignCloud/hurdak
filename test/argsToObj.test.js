import {assert} from 'chai'
import argsToObj from 'hurdak/argsToObj'

describe('argsToObj', () => {
  it('creates an object with any number of arguments', () => {
    assert.deepEqual(argsToObj([])(), {})
    assert.deepEqual(argsToObj(['x'])(1), {x: 1})
    assert.deepEqual(argsToObj(['x', 'y'])(1, 2), {x: 1, y: 2})
    assert.deepEqual(argsToObj(['x', 'y', 'z'])(1, 2, 3), {x: 1, y: 2, z: 3})
  })

  it('drops extra arguments', () => {
    assert.deepEqual(argsToObj(['x'])(1, 2), {x: 1})
  })

  it('sets missing arguments to undefined', () => {
    assert.deepEqual(argsToObj(['x', 'y'])(1), {x: 1, y: undefined})
  })
})
