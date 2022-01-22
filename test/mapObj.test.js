import {assert} from 'chai'
import mapObj from 'hurdak/mapObj'

describe('mapObj', () => {
  it('maps both keys and values', () => {
    assert.deepEqual(mapObj(x => x + 's', x => x + 1, {a: 1, b: 2}), {as: 2, bs: 3})
  })
})
