function perRecursive(starsString, replacements) {
	let result = []

	function backtrack(index, currentStr) {
		if (index === currentStr.length) {
			result.push(currentStr)
			return
		}

		let possibleCharacters = []

		if (currentStr[index] === '*') {
			possibleCharacters = replacements
		} else {
			possibleCharacters = currentStr[index]
		}

		for (let character of possibleCharacters) {
			let newString = currentStr.slice(0, index) + character + currentStr.slice(index + 1)
			backtrack(index + 1, newString)
		}
	}

	backtrack(0, starsString)
	return result
}

console.log(perRecursive('a*b*', 'cd')) // ["adbc", "adbd", "acbc", "acbd"]

/*

            a*b*
           /    \
        acb*    adb*
        /   \   /   \
    acbc  acbd adbc  adbd


*/
