export default function reverse(x: number): number {
  const isNegative = x < 0 ? true : false
  const num: number = parseInt(x.toString().split('').reverse().join(''))

  if (num > 0x7fffffff) {
    return 0
  }

  return isNegative ? num * -1 : num
}
