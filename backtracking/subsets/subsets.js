function generateSubsets(options) {
	const subsets = []
	const path = []

	function backtrack(index) {
		// Base case
		if (index === options.length) {
			subsets.push([...path])
			return
		}

		// As is
		backtrack(index + 1)

		// Include
		path.push(options[index])
		backtrack(index + 1)

		path.pop() // Undo the choice
	}

	backtrack(0)
	return subsets
}

console.log(generateSubsets([1])) // [[], [1]]
// console.log(JSON.stringify(generateSubsets([1, 2]))) // [[], [1], [2], [1, 2]]
