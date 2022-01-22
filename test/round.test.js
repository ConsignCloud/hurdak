import {assert} from 'chai'
import round from 'hurdak/round'

describe('round', () => {
  it('rounds positive numbers', () => {
    assert.equal(round(0, 1.2), 1)
    assert.equal(round(1, 1.2), 1.2)
    assert.equal(round(1, 1.29), 1.3)
    assert.equal(round(0, 1.5), 2)
  })

  it('rounds negative numbers', () => {
    assert.equal(round(0, -1.2), -1)
    assert.equal(round(1, -1.2), -1.2)
    assert.equal(round(1, -1.29), -1.3)
    assert.equal(round(0, -1.5), -1)
  })
})
