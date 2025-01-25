// Backtracking with Iteration
function generateSubsets(nums) {
	const subsets = [] // To store all subsets

	function backtrack(start, stack) {
		// Add the current subset to results
		subsets.push([...stack])

		// Try adding each element to the current subset
		for (let i = start; i < nums.length; i++) {
			stack.push(nums[i]) // Include nums[i]
			backtrack(i + 1, stack) // Recurse with the next index
			stack.pop() // Undo the choice (backtrack)
		}
	}

	backtrack(0, []) // Start with an empty subset
	return subsets
}

// Example usage
console.log(generateSubsets([1]))
const output1 = [[], [1]]

console.log(generateSubsets([1, 2, 3]))
const output2 = [[], [1], [1, 2], [1, 2, 3], [1, 3], [2], [2, 3], [3]]

// Easier solution to understand recursion (Direct Recursion with Choices)
function generateSubsets(nums) {
	const totalNumbers = nums.length
	const subsets = []
	const currentSubset = []

	function backtrack(index) {
		// Base case
		if (index === totalNumbers) {
			subsets.push([...currentSubset])
			return
		}

		// Exclude nums[index]
		backtrack(index + 1)

		// Include nums[index]
		currentSubset.push(nums[index])
		backtrack(index + 1)
		currentSubset.pop()
	}

	backtrack(0)
	return subsets
}

console.log(generateSubsets([1, 2]))
const output3 = [[], [1, 2], [2], [1]]
