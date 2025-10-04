# Backtracking
Backtracking explores all possible solutions by making and undoing choices.
It comes in two main styles:


## 1. Choices (Binary Decision)
Used when each step has two options — take or skip.
```js
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
```

## 2. Iterative (Looping)
Used when you try all candidates in a loop.

```js
function backtrack(path, candidates) {
	// Base case
	if (path.length === original.length) {
		result.push([...path])
		return
	}

	for (let i = 0; i < candidates.length; i++) {
		path.push(candidates[i])
		const newRemaining = candidates.filter((_, index) => index !== i)
		backtrack(path, newRemaining)
		path.pop()
	}
}

```

| Style         | Use Case               | Examples                 |
| ------------- | ---------------------- | ------------------------ |
| **Choices**   | Two decisions per step | Subsets, Combination Sum |
| **Iterative** | Loop over options      | Permutations, N-Queens   |
