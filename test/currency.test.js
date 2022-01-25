import {assert} from 'chai'
import Currency from 'hurdak/currency'

describe('currency', () => {
  it('setSymbol works', () => {
    Currency.setSymbol('x')
    assert.equal(Currency.getSymbol(), 'x')
    Currency.setSymbol('$')
  })

  it('parses stuff', () => {
    assert.equal(Currency.parse('$37.20'), 3720)
    assert.equal(Currency.parseNumeric('37.20'), 3720)
    assert.equal(Currency.parseRounded('$37'), 3700)
  })

  it('formats stuff', () => {
    assert.equal(Currency.format(3720), '$37.20')
    assert.equal(Currency.formatNumeric(3720), '37.20')
    assert.equal(Currency.formatRounded(3720), '$37')
    assert.equal(Currency.formatK(3823720), '$38.2k')
  })
})
