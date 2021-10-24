export default function maxProfit(prices: number[]): number {
  let min: number = prices[0]
  let previous: number = prices[0]
  let profit: number = 0

  prices.forEach((price) => {
    if (price > previous) {
      profit = Math.max(profit, price - min)
    } else {
      min = Math.min(min, price)
    }

    previous = price
  })

  return profit
}
