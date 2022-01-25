import {assert} from 'chai'
import displayList from 'hurdak/displayList'

describe('displayList', () => {
  it('works with various numbers of items', () => {
    assert.equal(displayList([1, 2, 3, 4, 5, 6], 'and', 3), '1, 2, 3, and 3 others')
    assert.equal(displayList([1, 2, 3, 4, 5], 'and', 3), '1, 2, 3, 4, and 5')
    assert.equal(displayList([1, 2, 3], 'and', 3), '1, 2, and 3')
    assert.equal(displayList([1, 2], 'and', 3), '1 and 2')
    assert.equal(displayList([1], 'and', 3), '1')
    assert.equal(displayList([], 'and', 3), '')
  })
})
