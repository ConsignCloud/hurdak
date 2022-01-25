import {assert} from 'chai'
import mapValues from 'hurdak/mapValues'

describe('mapValues', () => {
  it('modifies values', () => {
    assert.deepEqual(mapValues(x => x + 1, {a: 1, b: 2}), {a: 2, b: 3})
  })
})
