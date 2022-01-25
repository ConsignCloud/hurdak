import {assert} from 'chai'
import bytes from 'hurdak/bytes'

describe('bytes', () => {
  it('handles various', () => {
    assert.deepEqual(bytes(3, 'kb'), 3072)
    assert.deepEqual(bytes(3, 'mb'), 3145728)
    assert.deepEqual(bytes(3, 'gb'), 3221225472)
    assert.deepEqual(bytes(3, 'tb'), 3298534883328)
    assert.deepEqual(bytes(3, 'pb'), 3377699720527872)
  })
})
