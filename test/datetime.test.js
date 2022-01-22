import {assert} from 'chai'
import {formatDateTime} from 'hurdak/datetime'

describe('datetime', () => {
  it('formats things correctly', () => {
    assert.equal(formatDateTime(1642809444143), '1/21/2022 at 3:57:24 PM')
  })
})
