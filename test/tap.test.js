import {assert} from 'chai'
import tap from 'hurdak/tap'

describe('tap', () => {
  it('calls function and returns value', () => {
    let called = false

    const fn = tap(() => {
      called = true
    })

    assert.equal(1, fn(1))
    assert.isTrue(called)
  })
})
