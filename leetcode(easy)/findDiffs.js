const findDifference = (input1, input2) => {
	let difference = ''
	let hash = {}
	for (let i = 0; i < input1.length; i++) {
		const letter = input1[i]
		hash[letter] = hash[letter] + 1 || 1
	}

	for (let j = 0; j < input2.length; j++) {
		const letter = input2[j]

		if (!hash[letter]) {
			difference += letter
		}
		hash[letter] = hash[letter] - 1 //keep subtracking from s hash;
	}
	return result
}

console.log(findDifference('abcd', 'abcde')) // e
