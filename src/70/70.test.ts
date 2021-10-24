import climbStairs from './70'

test('expects 0 stairs to return 1', () => {
  expect(climbStairs(0)).toEqual(1)
})

test('expects 1 stair to return 1', () => {
  expect(climbStairs(1)).toEqual(1)
})

test('expects 2 stairs to return 2', () => {
  expect(climbStairs(2)).toEqual(2)
})

test('expects 3 stairs to return 3', () => {
  expect(climbStairs(3)).toEqual(3)
})

test('expects 4 stairs to return 5', () => {
  expect(climbStairs(4)).toEqual(5)
})

test('expects 5 stairs to return 8', () => {
  expect(climbStairs(5)).toEqual(8)
})
