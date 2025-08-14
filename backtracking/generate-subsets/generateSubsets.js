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
	const subsets = []
	const stack = []

	function backtrack(index) {
		// Base case
		if (index === nums.length) {
			subsets.push([...stack])
			return
		}

		// Exclude nums[index]
		backtrack(index + 1)

		// Include nums[index]
		stack.push(nums[index])
		backtrack(index + 1)
		stack.pop()
	}

	backtrack(0)
	return subsets
}

console.log(generateSubsets([1, 2]))
const output3 = [[], [1, 2], [2], [1]]

/* 
*** Example to help to read code line by to keep track ***

You will be writing here on each recursion:

subsets: [ ... ]
stack: [ ... ]
nums: [1,2]

Track the parameter on each recursion:

backtrack(0)
    backtrack(0+1)
        backtrack(1+1)
    backtrack(1+1)
backtrack(0+1)
    backtrack(1+1)
backtrack(1+1)

*/


