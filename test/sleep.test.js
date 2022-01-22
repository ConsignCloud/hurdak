import {assert} from 'chai'
import sleep from 'hurdak/sleep'

describe('sleep', () => {
  it('waits', done => {
    let seen = false

    sleep(20).then(() => {seen = true})
    setTimeout(() => assert.isFalse(seen), 10)
    setTimeout(() => assert.isTrue(seen), 30)
    setTimeout(done, 40)
  })
})
