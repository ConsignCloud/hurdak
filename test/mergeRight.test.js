import {assert} from 'chai'
import mergeRight from 'hurdak/mergeRight'

describe('mergeRight', () => {
  it('Merges exactly two objects', () => {
    assert.deepEqual(mergeRight({a: 1, b: 2}, {b: 3, c: 4}, {b: 4, d: 5}), {a: 1, b: 2, c: 4})
  })
})
