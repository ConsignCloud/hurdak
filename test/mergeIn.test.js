import {assert} from 'chai'
import mergeIn from 'hurdak/mergeIn'

describe('mergeIn', () => {
  it('should do a shallow merge at the given key', () => {
    assert.deepEqual(
      mergeIn('x',
        {a: 1},
        {x: {a: 2, c: 3}}),
      {x: {a: 1, c: 3}})
  })
})
