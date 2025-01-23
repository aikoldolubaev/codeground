function minChange(coins, length, total) {
	if (total === 0) {
		// base case
		return 0
	}

	let change = Number.MAX_SAFE_INTEGER // Maximum JS safest number; 2 types in JS(Number, BigInt)
	// let change = 9007199254740991; //For larger integers, consider using BigInt.
	for (let i = 0; i < length; i++) {
		if (coins[i] <= total) {
			//denomination <= total; 5 <= 7
			let changePermutations = minChange(coins, length, total - coins[i])
			if (changePermutations != Number.MAX_SAFE_INTEGER && changePermutations + 1 < change) {
				change = changePermutations + 1
			}
		}
	}
	return change
}

const coins = [1, 3, 5, 2]
let total = 7
console.log(minChange(coins, coins.length, total)) // 2; 5+2=7; 2 coins

// Solution with Infinity
function minChange2(coins, length, total) {
	if (total === 0) {
		// base case
		return 0
	}

	let change = Infinity // Maximum JS safest number; 2 types in JS(Number, BigInt)
	// let change = 9007199254740991; //For larger integers, consider using BigInt.
	for (let i = 0; i < length; i++) {
		if (coins[i] <= total) {
			//denomination <= total; 5 <= 7
			let changePermutations = minChange(coins, length, total - coins[i])
			if (changePermutations != Infinity && changePermutations + 1 < change) {
				change = changePermutations + 1
			}
		}
	}
	return change
}

const coins2 = [1, 3, 5, 2]
let total2 = 7
console.log(minChange2(coins2, coins2.length, total2)) // 2; 5+2=7; 2 coins
