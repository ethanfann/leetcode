import containsDuplicate from './217'

test('expects [1, 3, 5, 6] to return false', () => {
  const nums: number[] = [1, 3, 5, 6]
  expect(containsDuplicate(nums)).toEqual(false)
})

test('expects [1, 3, 5, 6, 6] to return true', () => {
  const nums: number[] = [1, 3, 5, 6, 6]
  expect(containsDuplicate(nums)).toEqual(true)
})
