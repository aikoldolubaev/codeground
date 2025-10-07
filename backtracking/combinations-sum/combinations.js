const consoleLog = require('../../consoleLog')

function combinationSum(candidates, target) {
	const res = []
	const path = []

	function backtrack(index, remaining) {
		// Base cases
		if (remaining === 0) {
			res.push([...path])
			return
		}

		// Out of bounds or negative remainder
		if (index === candidates.length || remaining < 0) return

		// As is
		backtrack(index + 1, remaining) // move to next

		// Include
		path.push(candidates[index])
		backtrack(index, remaining - candidates[index])
		path.pop() // undo the choice
	}

	backtrack(0, target)
	return res
}

// Example
consoleLog(combinationSum([2, 1], 2)) // [[1,1],[2]]
