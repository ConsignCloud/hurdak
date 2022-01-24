import {assert} from 'chai'
import mergeRightIn from 'hurdak/mergeRightIn'

describe('mergeRightIn', () => {
  it('should do a shallow merge at the given key', () => {
    assert.deepEqual(
      mergeRightIn('x',
        {a: 1, b: 5},
        {x: {a: 2, c: 3}}),
      {x: {a: 2, b: 5, c: 3}})
  })
})
