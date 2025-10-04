function generateSubsets(nums) {
	const subsets = []

	function backtrack(start, stack) {
		subsets.push([...stack])

		for (let i = start; i < nums.length; i++) {
			stack.push(nums[i])
			backtrack(i + 1, stack)
			stack.pop() // Undo the choice (backtrack)
		}
	}

	backtrack(0, [])
	return subsets
}

console.log(generateSubsets([1])) // [[], [1]]
console.log(generateSubsets([1, 2, 3])) // [[], [1], [1, 2], [1, 2, 3], [1, 3], [2], [2, 3], [3]]

// with Choices
function generateSubsets(nums) {
	const subsets = []
	const stack = []

	function backtrack(index) {
		// Base case
		if (index === nums.length) {
			subsets.push([...stack])
			return
		}

		// As is
		backtrack(index + 1)

		// Include nums[index]
		stack.push(nums[index])
		backtrack(index + 1)
		stack.pop() // Undo the choice (backtrack)
	}

	backtrack(0)
	return subsets
}

console.log(generateSubsets([1, 2])) // [[], [1, 2], [2], [1]]
