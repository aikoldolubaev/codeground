// Leetcode: https://leetcode.com/problems/permutations/description/

const consoleLog = require('../../consoleLog')

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

// Example usage:
// 2*1=2 permutations
consoleLog(permutations([1, 2])) // [[1, 2], [2, 1]]
// 3*2*1=6
consoleLog(permutations([1, 2, 3])) // [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
