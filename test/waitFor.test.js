import {assert} from 'chai'
import waitFor from 'hurdak/waitFor'

describe('waitFor', () => {
  it('should resolve when the condition changes', done => {
    let condition = false
    let success = false

    waitFor(() => condition, 5).then(() => {
      success = true
    })

    setTimeout(() => {
      condition = true
    }, 10)

    setTimeout(() => {
      assert.isTrue(success)

      done()
    }, 15)
  })
})
