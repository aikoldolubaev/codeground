// Without Recursion
const flatten = (arr) => {
	const stack = [...arr] // make a copy
	const result = []

	while (stack.length > 0) {
		const current = stack.pop() // Take value from the end
		if (Array.isArray(current)) {
			stack.push(...current)
		} else {
			result.unshift(current) // Add the value to the front
		}
	}

	return result
}

console.log(flatten([1, [[[[[2]]]]], [[3]], [[[4]]]])) // [ 1, 2, 3, 4 ]

// With Recursion
const flattenWithRecursion = (arr) => {
	let result = []
	for (let i = 0; i < arr.length; i++) {
		if (Array.isArray(arr[i])) result = result.concat(flattenWithRecursion(arr[i]))
		else result.push(arr[i])
	}
	return result
}

flattenWithRecursion([1, [2], [[3]], [[[4]]]]) //[ 1, 2, 3, 4 ]
