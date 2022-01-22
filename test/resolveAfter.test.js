import {assert} from 'chai'
import resolveAfter from 'hurdak/resolveAfter'

describe('resolveAfter', () => {
  it('should resolve with the given argument after given duration', done => {
    const value = 'VALUE'
    let result

    // Give it 5 ms since the event loop isn't fast enough to queue 1ms properly
    resolveAfter(10, value).then(resolvedValue => {
      result = resolvedValue
    })

    // Make sure it's actually waiting asynchronously
    setTimeout(() => assert.isUndefined(result), 5)

    // Check that it worked
    setTimeout(() => assert.equal(result, value), 15)

    // We're done
    setTimeout(done, 20)
  })
})
