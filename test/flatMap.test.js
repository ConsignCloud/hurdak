import {assert} from 'chai'
import flatMap from 'hurdak/flatMap'

describe('flatMap', () => {
  it('maps and cats', () => {
    assert.deepEqual(flatMap(x => [x, x + 1], [2, 3]), [2, 3, 3, 4])
  })
})
