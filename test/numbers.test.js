import {assert} from 'chai'
import Numbers from 'hurdak/numbers'

describe('Numbers.parseFloat', () => {
  it('parses various things', () => {
    assert.equal(Numbers.parseFloat(NaN), 0)
    assert.equal(Numbers.parseFloat('stuff'), 0)
    assert.equal(Numbers.parseFloat({}), 0)
    assert.equal(Numbers.parseFloat(3), 3)
    assert.equal(Numbers.parseFloat(5.8), 5.8)
    assert.equal(Numbers.parseFloat('12.2'), 12.2)
    assert.equal(Numbers.parseFloat('12.2.33'), 12.2)
    assert.equal(Numbers.parseFloat('12.2  '), 12.2)
  })

  it('takes a fallback', () => {
    assert.equal(Numbers.parseFloat(NaN, 1), 1)
  })
})

describe('Numbers.parseFloat', () => {
  it('parses various things', () => {
    assert.equal(Numbers.parseInt(NaN), 0)
    assert.equal(Numbers.parseInt('stuff'), 0)
    assert.equal(Numbers.parseInt({}), 0)
    assert.equal(Numbers.parseInt(3), 3)
    assert.equal(Numbers.parseInt(5.8), 5)
  })

  it('takes a fallback', () => {
    assert.equal(Numbers.parseInt(NaN, 1), 1)
  })
})

describe('Numbers.commaFormat', () => {
  it('formats long numbers properly', () => {
    assert.equal(Numbers.commaFormat(123456789), '123,456,789')
  })

  it('formats negative numbers properly', () => {
    assert.equal(Numbers.commaFormat(-100200), '-100,200')
  })
})
