import {assert} from 'chai'
import mergePath from 'hurdak/mergePath'

describe('mergePath', () => {
  it('should do a shallow merge at a given path', () => {
    assert.deepEqual(
      mergePath(['x', 'y'],
        {z: {a: 1, b: 2}},
        {x: {y: {z: {a: 2, c: 3}, w: 1}}}),
      {x: {y: {z: {a: 1, b: 2}, w: 1}}})

    assert.deepEqual(
      mergePath(['x'],
        {a: 1},
        {x: {a: 2, c: 3}}),
      {x: {a: 1, c: 3}})
  })
})
