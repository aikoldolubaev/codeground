const permuteUnique = (nums) => {
	let res = []
	let countMap = {} // Hash map to count occurrences

	// Populate the hash map
	for (let num of nums) {
		countMap[num] = (countMap[num] || 0) + 1
	}

	function backtrack(path) {
		if (path.length === nums.length) {
			res.push([...path])
			return
		}

		for (let num in countMap) {
			if (countMap[num] > 0) {
				countMap[num]-- // Use the number
				path.push(Number(num))

				backtrack(path)

				path.pop() // Backtrack
				countMap[num]++ // Restore count
			}
		}
	}

	backtrack([])
	return res
}

// Example usage:
console.log(permuteUnique([1, 1, 2]))
