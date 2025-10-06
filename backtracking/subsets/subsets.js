function generateSubsets(options) {
	const subsets = []
	const stack = []

	function backtrack(index) {
		// Base case
		if (index === options.length) {
			subsets.push([...stack])
			return
		}

		// As is
		backtrack(index + 1)

		// Include nums[index]
		stack.push(options[index])
		backtrack(index + 1)

		stack.pop() // Undo the choice (backtrack)
	}

	backtrack(0)
	return subsets
}

console.log(generateSubsets([1])) // [[], [1]]
