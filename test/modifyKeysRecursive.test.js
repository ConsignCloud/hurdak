import {assert} from 'chai'
import modifyKeysRecursive from 'hurdak/modifyKeysRecursive'

describe('modifyKeysRecursive', () => {
  it('should modify keys of an object recursively without modifying values', () => {
    const value = {x: 1, y: {z: 2}}
    const result = modifyKeysRecursive(key => `$${key}`, value)

    assert.deepEqual(result, {$x: 1, $y: {$z: 2}})
  })

  it('should dig into arrays', () => {
    const value = {x: 1, y: {z: [{w: 2}, {a: 3}]}}
    const result = modifyKeysRecursive(key => `$${key}`, value)

    assert.deepEqual(result, {$x: 1, $y: {$z: [{$w: 2}, {$a: 3}]}})
  })

  it('should dig into arrays of non-objects', () => {
    const value = {x: 1, y: {z: ['one', 'two']}}
    const result = modifyKeysRecursive(key => `$${key}`, value)

    assert.deepEqual(result, {$x: 1, $y: {$z: ['one', 'two']}})
  })

  it('should dig into nested arrays', () => {
    const value = {x: 1, y: {z: [[{a: 'one', b: 'two'}]]}}
    const result = modifyKeysRecursive(key => `$${key}`, value)

    assert.deepEqual(result, {$x: 1, $y: {$z: [[{$a: 'one', $b: 'two'}]]}})
  })
})
