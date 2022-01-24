import {assert} from 'chai'
import defmulti from 'hurdak/multimethod'

describe('multimethod', () => {
  const f = defmulti('test', x => x, {
    a: () => 1,
  })

  f.addMethod('b', () => 2)
  f.addDefaultMethod(() => 3)

  it('default and regular methods work', () => {
    assert.equal(f('a'), 1)
    assert.equal(f('b'), 2)
    assert.equal(f('c'), 3)
  })
})
