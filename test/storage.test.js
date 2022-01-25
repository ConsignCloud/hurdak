import {assert} from 'chai'
import Storage from 'hurdak/storage'

describe('Storage', () => {
  const data = {y: 1}

  it('basically works', () => {
    Storage.setJson('x', data)

    assert.equal(Storage.getItem('x'), JSON.stringify(data))
    assert.deepEqual(Storage.getJson('x'), data)
    assert.deepEqual(Storage.keys(), ['x'])

    Storage.clear()

    assert.equal(Storage.getItem('x'), undefined)
    assert.deepEqual(Storage.keys(), [])
  })

  it('works with a cursor', () => {
    const cursor = Storage.cursor('x', data)

    assert.deepEqual(cursor.get(), data)

    Storage.clear()

    assert.deepEqual(cursor.get(), null)
  })
})
