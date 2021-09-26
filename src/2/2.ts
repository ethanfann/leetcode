export class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

function listSum(l1: ListNode, l2: ListNode): number[] {
  let remainder: boolean = false
  let numbers: number[] = []

  while (l1 || l2) {
    // Use 0 for a null node value
    let num1 = l1 ? l1.val : 0
    let num2 = l2 ? l2.val : 0

    // Calculate the sum and update remainder
    let sum: number = remainder ? num1 + num2 + 1 : num1 + num2
    remainder = sum > 9

    // Take the second digit for two-digit values
    let newVal = sum > 9 ? parseInt(sum.toString().split('')[1]) : sum
    numbers.push(newVal)

    // Update our position in the list
    l1 = l1 && l1.next != null ? l1.next : null
    l2 = l2 && l2.next != null ? l2.next : null

    // Append 1 if we're at the end and there's a remainder
    if (!l1 && !l2 && remainder) {
      numbers.push(1)
    }
  }

  return numbers
}

export default function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  const numbers: number[] = listSum(l1, l2)

  let node, temp
  numbers.reverse().forEach((number) => {
    if (!node) node = new ListNode(number)
    else {
      temp = new ListNode(number)
      temp.next = node
      node = temp
    }
  })

  return node
}
