import {assert} from 'chai'
import uuid, {UUID} from 'hurdak/uuid'

describe('uuid', () => {
  it('generates and matches uuids', () => {
    assert.ok(uuid().match(UUID))
  })
})
