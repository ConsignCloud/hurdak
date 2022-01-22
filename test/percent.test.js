import {assert} from 'chai'
import Percent from 'hurdak/percent'

describe('percent', () => {
  it('parses stuff', () => {
    assert.equal(Percent.parse('23.5%'), 0.235)
    assert.equal(Percent.parseNumeric('23.5'), 0.235)
  })

  it('formats stuff', () => {
    assert.equal(Percent.format(0.235), '23.5%')
    assert.equal(Percent.formatNumeric(0.235), '23.5')
  })
})
