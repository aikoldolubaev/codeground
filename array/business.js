//2 test cases 1)current is less than next one
//             2) firt profit is bigger than any other profits

const business = (a) => {
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
				//2)
				profit = temp
				buy = false
			}
		}
	}
	return profit
}
business([1, 2, 3, 4])
