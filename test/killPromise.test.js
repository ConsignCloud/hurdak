import {assert} from 'chai'
import killPromise from 'hurdak/killPromise'

describe('killPromise', () => {
  it('stops promises', done => {
    let seen = false

    killPromise(Promise.resolve()).then(() => {seen = true})
    setTimeout(() => {
      assert.equal(seen, false)
      done()
    }, 10)
  })
})
