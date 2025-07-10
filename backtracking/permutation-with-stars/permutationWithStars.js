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

function iterativePermutations(str, s) {
	const result = [],
		hash = {},
		arr = [str]

	while (arr.length) {
		let curr = arr.shift().split('') // [ 'a', '*', 'b', '*' ]
		for (let i = 0; i < curr.length; i++) {
			if (curr[i] == '*') {
				for (let j = 0; j < s.length; j++) {
					curr[i] = s[j] //replacing "*" to "c"
					let c = curr.join('') //turning back to string;  [ 'a', 'c', 'b', '*' ]  => "acb*"
					if (c.includes('*')) {
						arr.push(c) //"acb*"
					} else if (!hash[c]) {
						//making sure we don't insert duplicates
						result.push(c)
						hash[c] = true
					}
				}
			}
		}
	}
	return result
}
iterativePermutations('a*b*', 'cd') //["adbc", "adbd", "acbc", "acbd"]
