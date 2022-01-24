import {assert} from 'chai'
import merge from 'hurdak/merge'

describe('merge', () => {
  it('Merges exactly two objects', () => {
    assert.deepEqual(merge({a: 1, b: 2}, {b: 3, c: 4}, {b: 4, d: 5}), {a: 1, b: 3, c: 4})
  })
})
