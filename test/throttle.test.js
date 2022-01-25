import {assert} from 'chai'
import throttle from 'hurdak/throttle'

describe('throttle', () => {
  it('ignores calls that are too close together', done => {
    let i = 0

    const f = throttle(() => { i++ }, 10)

    setTimeout(f, 5)
    setTimeout(f, 10)
    setTimeout(f, 15)
    setTimeout(f, 35)
    setTimeout(() => {
      assert.equal(i, 2)
      done()
    }, 50)
  })
})
