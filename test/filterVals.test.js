import {assert} from 'chai'
import filterVals from 'hurdak/filterVals'

describe('filterVals', () => {
  it('keeps values that match', () => {
    assert.deepEqual(filterVals(x => x > 2, {x: 1, y: 2, z: 3}), {z: 3})
  })
})
