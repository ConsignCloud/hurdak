import {assert} from 'chai'
import summarize from 'hurdak/summarize'

describe('summarize', () => {
  it('summarizes stuff', () => {
    assert.equal(
      summarize([{a: [1, 2], b: 'hello'}, [3, {z: 100}]], 2),
      '[{a: <object>, b: "hello"}, [3, <object>]]'
    )
  })
})
