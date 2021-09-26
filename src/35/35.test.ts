import searchInsert from './35'

test('expects [1, 3, 5, 6] with a target of 5 to return 2', () => {
  const nums: number[] = [1, 3, 5, 6]
  const target: number = 5
  expect(searchInsert(nums, target)).toEqual(2)
})

test('expects [1, 3, 5, 6] with a target of 2 to return 1', () => {
  const nums: number[] = [1, 3, 5, 6]
  const target: number = 2
  expect(searchInsert(nums, target)).toEqual(1)
})

test('expects [1, 3, 5, 6] with a target of 7 to return 4', () => {
  const nums: number[] = [1, 3, 5, 6]
  const target: number = 7
  expect(searchInsert(nums, target)).toEqual(4)
})

test('expects [1, 3, 5, 6] with a target of 0 to return 0', () => {
  const nums: number[] = [1, 3, 5, 6]
  const target: number = 0
  expect(searchInsert(nums, target)).toEqual(0)
})

test('expects [1] with a target of 0 to return 0', () => {
  const nums: number[] = [1]
  const target: number = 0
  expect(searchInsert(nums, target)).toEqual(0)
})
