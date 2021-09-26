import addTwoNumbers, { ListNode } from './2'

test('expects [2,4,3] and [5,6,4] to sum to [7,0,8]', () => {
  const l1 = new ListNode(2, new ListNode(4, new ListNode(3)))
  const l2 = new ListNode(5, new ListNode(6, new ListNode(4)))

  expect(addTwoNumbers(l1, l2)).toEqual(
    new ListNode(7, new ListNode(0, new ListNode(8)))
  )
})

test('expects [0] and [0] to sum to [0]', () => {
  const l1 = new ListNode(0)
  const l2 = new ListNode(0)

  expect(addTwoNumbers(l1, l2)).toEqual(new ListNode(0))
})

test('expects [9,9,9,9,9,9,9] and [9,9,9,9] to sum to [8,9,9,9,0,0,0,1]', () => {
  let l1 = new ListNode(
    9,
    new ListNode(
      9,
      new ListNode(
        9,
        new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))))
      )
    )
  )
  let l2 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))))

  expect(addTwoNumbers(l1, l2)).toEqual(
    new ListNode(
      8,
      new ListNode(
        9,
        new ListNode(
          9,
          new ListNode(
            9,
            new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(1))))
          )
        )
      )
    )
  )
})
