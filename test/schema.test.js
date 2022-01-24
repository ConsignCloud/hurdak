import {assert} from 'chai'
import summarize from 'hurdak/summarize'
import {getError, default as s} from 'hurdak/schema'

const pass = (schema, value) => assert.equal(null, getError(schema, value))

const fail = (code, schema, value) => {
  const err = getError(schema, value)

  assert.ok(
    err,
    `No error returned for "${summarize(schema)}" and "${summarize(value)}"`
  )

  assert.equal(code, err.code)
}

describe('Schema', () => {
  it('gets paths right', () => {
    const {path} = getError([[{x: s.Int}]], [[{x: 1}, {x: 'x'}]])

    assert.deepEqual([0, 1, 'x'], path)
  })

  it('rejects primitives', () => {
    assert.throws(() => getError(Number, 1))
  })

  it('validates int', () => {
    fail(s.TYPE_ERROR, s.Int, 'x')
    fail(s.TYPE_ERROR, s.Int, 1.2)
    pass(s.Int, 1)
  })

  it('validates num', () => {
    fail(s.TYPE_ERROR, s.Num, 'x')
    pass(s.Num, 1.2)
    pass(s.Num, 1)
  })

  it('validates str', () => {
    pass(s.Str, 'x')
    fail(s.TYPE_ERROR, s.Str, 1.2)
    fail(s.TYPE_ERROR, s.Str, 1)
    fail(s.TYPE_ERROR, s.Str, null)
  })

  it('validates requiredKeys', () => {
    const schema = s.obj({x: s.Int}, {requiredKeys: ['x']})

    fail(s.MISSING_KEY, schema, {})
  })

  it('validates requiredValues', () => {
    const schema = s.obj({x: s.Int}, {requiredValues: ['x']})

    fail(s.MISSING_VALUE, schema, {})
    fail(s.MISSING_VALUE, schema, {x: null})
  })
})
