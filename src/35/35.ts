function binarySearch(
  nums: number[],
  left: number,
  right: number,
  target: number
): number {
  if (right >= left) {
    let mid: number = left + Math.floor((right - left) / 2)

    if (nums[mid] === target) {
      return mid
    }

    if (nums[mid] > target) {
      return binarySearch(nums, left, mid - 1, target)
    }

    return binarySearch(nums, mid + 1, right, target)
  }

  return left
}

export default function searchInsert(nums: number[], target: number): number {
  return binarySearch(nums, 0, nums.length - 1, target)
}
