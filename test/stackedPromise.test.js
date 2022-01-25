import {assert} from 'chai'
import stackedPromise from 'hurdak/stackedPromise'

describe('stackedPromise', () => {
  it('avoids returning obsolete values', done => {
    const track = stackedPromise()

    Promise.all([
      track(new Promise(resolve => setTimeout(() => resolve(1), 10))),
      track(new Promise(resolve => setTimeout(() => resolve(2), 20))),
      track(new Promise(resolve => setTimeout(() => resolve(3), 5))),
    ]).then(([a, b, c]) => {
      assert.deepEqual([a, b, c], [3, 3, 3])
      done()
    })
  })

  it('works with rejections as well', done => {
    const track = stackedPromise()

    Promise.all([
      track(new Promise((resolve, reject) => setTimeout(() => reject(1), 10))),
      track(new Promise((resolve, reject) => setTimeout(() => reject(2), 20))),
      track(new Promise((resolve, reject) => setTimeout(() => reject(3), 5))),
    ]).catch(v => {
      assert.deepEqual(v, 3)
      done()
    })
  })
})
