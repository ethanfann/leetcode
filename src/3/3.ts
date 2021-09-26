export default function lengthOfLongestSubstring(s: string): number {
  if (!s) {
    return 0
  }

  if (s.length === 1) {
    return 1
  }

  var temp: string = ''
  var max: number = 0
  for (var char of s.split('')) {
    if (temp.includes(char)) {
      temp = temp.substring(temp.indexOf(char) + 1)
    }
    temp = temp.concat(char)
    max = temp.length > max ? temp.length : max
  }

  return max
}
