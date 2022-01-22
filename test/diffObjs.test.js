import {assert} from 'chai'
import diffObjs from 'hurdak/diffObjs'

describe('diffObjs', () => {
  it('should handle duplicate keys', () => {
    assert.deepEqual(diffObjs({a: 1, b: 2, c: 3}, {b: 1, d: 2}), [
      ['key "a" was removed in object 2. Old value:', 1],
      ['key "b" was changed in object 2. Old value: ', 2, 'New value:', 1],
      ['key "c" was removed in object 2. Old value:', 3],
      ['key "d" is new in object 2. New value:', 2],
    ])
  })
})
