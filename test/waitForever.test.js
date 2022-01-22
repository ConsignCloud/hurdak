import {assert} from 'chai'
import waitForever from 'hurdak/waitForever'

describe('waitForever', () => {
  it('never resolves', done => {
    let seen = false

    waitForever().then(() => { seen = true })
    setTimeout(() => {
      assert.isFalse(seen)
      done()
    }, 30)
  })
})
