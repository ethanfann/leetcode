export default function twoSum(nums: number[], target: number): number[] {
  if (nums.length === 2) return [0, 1]

  var map = {}

  for (var [index1, num] of nums.entries()) {
    const index2 = map[target - num]

    if (index2 !== undefined) return [index2, index1]
    map[num] = index1
  }

  return []
}
