function removeDuplicate(str) {
	let allUnique = ''
	str.split('')
		.sort()
		.reduce((ac, index) => {
			if (!ac[index]) {
				ac[index] = true
				allUnique += index
			}
			return ac
		}, {})
	return allUnique
}
console.log(removeDuplicate('aabcad')) //abcd
