import {assert} from 'chai'
import mapVals from 'hurdak/mapVals'

describe('mapVals', () => {
  it('modifies values', () => {
    assert.deepEqual(mapVals(x => x + 1, {a: 1, b: 2}), {a: 2, b: 3})
  })
})
