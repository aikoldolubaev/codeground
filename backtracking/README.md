# Backtracking
Backtracking explores all possible solutions by making and undoing choices.
It comes in two main styles:


## 1. Choices (Binary Decision)
Used when each step has two options — take or skip.
```js
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

generateSubsets([1]) // [[], [1]]

```

## 2. Iterative (Looping)
Used when you try all candidates in a loop.

```js
const permutations = (options) => {
	const result = []

	function backtrack(path, candidates) {
		// Base case
		if (path.length === options.length) {
			result.push([...path])

			return
		}

		for (let i = 0; i < candidates.length; i++) {
			path.push(candidates[i])
			const remaining = candidates.slice(0, i).concat(candidates.slice(i + 1))
			backtrack(path, remaining)
			path.pop()
		}
	}

	backtrack([], options)
	return result
}

permutations([1, 2]) // [[1, 2], [2, 1]]

```
## Summary
| Style         | Use Case               | Examples                 |
| ------------- | ---------------------- | ------------------------ |
| **Choices**   | Two decisions per step | Subsets, Combination Sum |
| **Iterative** | Loop over options      | Permutations, N-Queens   |
