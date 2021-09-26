import lengthOfLongestSubstring from './3'

test('expects abcabcbb to return to 3', () => {
  expect(lengthOfLongestSubstring('abcabcbb')).toEqual(3)
})

test('expects bbbb to return 1', () => {
  expect(lengthOfLongestSubstring('bbbb')).toEqual(1)
})

test('expects pwwkew to return 3', () => {
  expect(lengthOfLongestSubstring('pwwkew')).toEqual(3)
})

test('expects aab to return 2', () => {
  expect(lengthOfLongestSubstring('aab')).toEqual(2)
})

test('expects an empty string to return 0', () => {
  expect(lengthOfLongestSubstring('')).toEqual(0)
})
