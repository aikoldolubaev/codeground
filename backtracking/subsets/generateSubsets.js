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
