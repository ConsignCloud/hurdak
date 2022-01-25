import {assert} from 'chai'
import logarithm from 'hurdak/logarithm'

describe('logarithm', () => {
  it('works with different bases', () => {
    assert.equal(logarithm(10, 3), 0.4771212547196623)
    assert.equal(logarithm(Math.E, 3), 1.0986122886681096)
  })
})
