// LeetCode: https://leetcode.com/problems/combination-sum/description/

function combinationSum(candidates, target) {
	const result = []

	function backtrack(index, path, sum) {
		if (sum === target) {
			result.push([...path])
			return
		}
		if (sum > target) return

		for (let i = index; i < candidates.length; i++) {
			path.push(candidates[i])
			backtrack(i, path, sum + candidates[i])
			path.pop()
		}
	}

	backtrack(0, [], 0)
	return result
}

console.log(combinationSum([2, 3, 6, 7], 7)) // [[2,2,3], [7]]
