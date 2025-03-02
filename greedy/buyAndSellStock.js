const buyAndSellStock = (a) => {
	let profit = -1
	let current = 0
	let next = 0
	let buy = true
	for (let i = 0; i < a.length; i++) {
		if (buy) current = a[i] //buying at first product;
		next = a[i + 1]
		if (next < current) buy = true //making sure we're not selling if there is no profit 1)
		else {
			let temp = next - current
			if (temp > profit) {
				profit = temp
				buy = false
			}
		}
	}
	return profit
}

console.log(buyAndSellStock([1, 2, 3, 4])) // 3 why? because we buy at 1 and sell at 4
console.log(buyAndSellStock([1, 2, 3, 4, 5])) // 4 why? because we buy at 1 and sell at 5
console.log(buyAndSellStock([7, 1, 5, 3, 6, 4])) // 5 why? because we buy at 1 and sell at 6
console.log(buyAndSellStock([7, 6, 4, 3, 1])) // -1 why? because we can't make profit
console.log(buyAndSellStock([7, 6, 4, 3, 1, 8])) // 7 why? because we buy at 1 and sell at 8
console.log(buyAndSellStock([7, 6, 4, 3, 1, 8, 9])) // 8 why? because we buy at 1 and sell at 9
console.log(buyAndSellStock([7, 6, 4, 3, 1, 8, 9, 10])) // 9 why? because we buy at 1 and sell at 10

buyAndSellStockOptimization = (a) => {
	let minPrice = Infinity // The biggest number possible
	let maxProfit = 0

	for (let i = 0; i < a.length; i++) {
		minPrice = Math.min(minPrice, a[i]) // Buy at the lowest price seen so far
		maxProfit = Math.max(maxProfit, a[i] - minPrice) // Sell at current price if profitable
	}

	return maxProfit > 0 ? maxProfit : -1 // Return -1 if no profit is possible
}

console.log(buyAndSellStockOptimization([1, 2, 3, 4])) // 3 why? because we buy at 1 and sell at 4
console.log(buyAndSellStockOptimization([1, 2, 3, 4, 5])) // 4 why? because we buy at 1 and sell at 5
console.log(buyAndSellStockOptimization([7, 1, 5, 3, 6, 4])) // 5 why? because we buy at 1 and sell at 6
console.log(buyAndSellStockOptimization([7, 6, 4, 3, 1])) // -1 why? because we can't make profit
console.log(buyAndSellStockOptimization([7, 6, 4, 3, 1, 8])) // 7 why? because we buy at 1 and sell at 8
