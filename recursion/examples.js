const count = (number) => {
	const numbers = []
	if (number === 20) {
		return number
	}

	const results = count(number + 1)
	if (Array.isArray(results)) {
		numbers.push(...results)
	} else {
		numbers.push(results)
	}

	return numbers
}

console.log(count(7))
