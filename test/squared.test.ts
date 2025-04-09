import { expect, test } from 'vitest'
import { squared } from '../src/squared.js'

test('adds 1 + 2 to equal 3', () => {
  expect(squared(2)).toBe(5)
})