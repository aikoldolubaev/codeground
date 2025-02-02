const factorial = (number) => {
	if (number == 1) {
		return number
	}
	return number * recursion(number - 1)
}
console.log(factorial(4)) // Output: 24

/*

recursion(4)
	4*recursion(4-1)
		3*recursion(3-1)
			2*recursion(2-1)
				1
		2*1=2
	3*2=6
4*6=24


*/

// Test the code on how Call Stack works:
const stack = []
const recursion = (number) => {
	console.log('number1: ', number)
	if (number == 1) {
		return number
	}
	const result = number * recursion(number - 1)
	stack.push({ result, number })
	return result
}

console.log(recursion(4))
console.log('stack: ', stack)
