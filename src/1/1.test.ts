import twoSum from './1'

test('expects [2, 7, 11, 15] with a target of 9 to return [0, 1]', () => {
  const nums: number[] = [2, 7, 11, 15]
  const target: number = 9
  expect(twoSum(nums, target)).toEqual([0, 1])
})

test('expects [3, 2, 4] with a target of 6 to return [1, 2]', () => {
  const nums: number[] = [3, 2, 4]
  const target: number = 6
  expect(twoSum(nums, target)).toEqual([1, 2])
})

test('expects [3, 3] with a target of 6 to return [0, 1]', () => {
  const nums: number[] = [3, 3]
  const target: number = 6
  expect(twoSum(nums, target)).toEqual([0, 1])
})

test('expects [-1, -2, -3, -4] with a target of -4 to return [0, 2]', () => {
  const nums: number[] = [-1, -2, -3, -4]
  const target: number = -4
  expect(twoSum(nums, target)).toEqual([0, 2])
})
