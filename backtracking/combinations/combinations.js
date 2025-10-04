const consoleLog = require('../../consoleLog')

function combinationSum(candidates, target) {
	const res = []
	const path = []

	function backtrack(i, remain) {
		// 🎯 Base cases
		if (remain === 0) {
			res.push([...path])
			return
		}

		// Out of bounds or negative remainder
		if (i === candidates.length || remain < 0) return

		// ✅ Choice 1: include
		path.push(candidates[i])
		backtrack(i, remain - candidates[i])
		path.pop() // undo the choice

		// 🚫 Choice 2: skip
		backtrack(i + 1, remain) // move to next
	}

	backtrack(0, target)
	return res
}

// Example
consoleLog(combinationSum([2, 1], 3)) // [[2,1], [1,1,1]]
