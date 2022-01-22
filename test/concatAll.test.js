import {assert} from 'chai'
import concatAll from 'hurdak/concatAll'

describe('concatAll', () => {
  assert.deepEqual(concatAll(), [])
  assert.deepEqual(concatAll([[1, 2]]), [1, 2])
  assert.deepEqual(concatAll([[1, 2], [3, 4]]), [1, 2, 3, 4])
  assert.deepEqual(concatAll([[1, 2], [3, 4], [5, 6]]), [1, 2, 3, 4, 5, 6])
})
