import {assert} from 'chai'
import noopPromise from 'hurdak/noopPromise'

describe('noopPromise', () => {
  it("acts like a regular promise but doesn't propagate", done => {
    let then = false
    let caught = false

    noopPromise.then(() => {then = true})
    noopPromise.catch(() => {caught = true})

    setTimeout(() => {
      assert.equal(then, false)
      assert.equal(caught, false)
      done()
    }, 10)
  })
})
