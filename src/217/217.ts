export default function containsDuplicate(nums: number[]): boolean {
  const set = new Set(nums)

  if (set.size == nums.length) {
    return false
  } else {
    return true
  }
}
