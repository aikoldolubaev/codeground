## 🏁 Recommended Order to Practice
- ✅ Subsets → easiest (no conditions)
- 🔁 Permutations → order matters
- ➕ Combination Sum → add target conditions
- ♟️ N-Queens → constraints + grid logic
- 🧩 Sudoku Solver → advanced constraints


```js
function backtrack(path, options) {
	if (goalReached(path)) {
		result.push([...path]) // store a valid solution
		return
	}

	for (let choice of options) {
		if (isValid(choice, path)) {
			path.push(choice) // make a choice
			backtrack(path, options) // explore
			path.pop() // undo the choice (backtrack)
		}
	}
}

```