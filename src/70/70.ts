export default function climbStairs(n: number): number {
  if (n == 0 || n == 1) return 1

  let ways = [1, 1]

  for (let i = 2; i <= n; i++) {
    ways.push(ways[i - 2] + ways[i - 1])
  }

  return ways[n]
}
