import reverse from './7'

test('expects 123 to reverse to 321', () => {
  expect(reverse(123)).toEqual(321)
})

test('expects -123 to reverse to -321', () => {
  expect(reverse(-123)).toEqual(-321)
})

test('expects 120 to reverse to 21', () => {
  expect(reverse(120)).toEqual(21)
})

test('expects 1534236469 to reverse out of range ', () => {
  expect(reverse(1534236469)).toEqual(0)
})
