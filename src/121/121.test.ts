import maxProfit from './121'

test('expects [7,1,5,3,6,4] to return 5', () => {
  const nums: number[] = [7, 1, 5, 3, 6, 4]
  expect(maxProfit(nums)).toEqual(5)
})

test('expects [7,6,4,3,1] to return 0', () => {
  const nums: number[] = [7, 6, 4, 3, 1]
  expect(maxProfit(nums)).toEqual(0)
})

test('expects [1,2] to return 1', () => {
  const nums: number[] = [1, 2]
  expect(maxProfit(nums)).toEqual(1)
})
