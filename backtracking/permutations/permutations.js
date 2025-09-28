// Leetcode: https://leetcode.com/problems/permutations/description/

const permutations = (arr) => {
	const result = []

	function backtrack(temp, remaining) {
		// Base case
		if (temp.length === arr.length) {
			result.push([...temp])

			return
		}

		for (let i = 0; i < remaining.length; i++) {
			temp.push(remaining[i])
			const newRemaining = remaining.slice(0, i).concat(remaining.slice(i + 1))
			backtrack(temp, newRemaining)
			temp.pop()
		}
	}

	backtrack([], arr)
	return result
}

// Example usage:
console.log(permutations([1, 2, 3])) // 3*2*1=6 permutations
console.log(permutations([1, 2])) // 2*1=2 permutations
