function getPermutations(starsStr, replaceWith) {
	let result = []

	function backtrack(index, permutation) {
		// Base case
		if (index === permutation.length) {
			result.push(permutation)
			return
		}

		let letters = permutation[index]

		if (permutation[index] === '*') {
			letters = replaceWith
		}

		for (let letter of letters) {
			// let newStarsStr = permutation.slice(0, index) + letter + permutation.slice(index + 1)
			let newStarsStr = permutation.split('')
			newStarsStr[index] = letter
			newStarsStr = newStarsStr.join('')
			backtrack(index + 1, newStarsStr)
		}
	}

	backtrack(0, starsStr)
	return result
}

console.log(getPermutations('a*b*', 'cd')) // ["adbc", "adbd", "acbc", "acbd"]

/*

            a*b*
           /    \
        acb*    adb*
        /   \   /   \
    acbc  acbd adbc  adbd


*/
