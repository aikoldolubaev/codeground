// LeetCode: https://leetcode.com/problems/combination-sum/description/

function combinationSum(candidates, target) {
	const combinations = []

	function backtrack(index, path, sum) {
		if (sum === target) {
			combinations.push([...path])
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
	return combinations
}

console.log(combinationSum([2, 1], 2)) // [[2], [1,1]]
