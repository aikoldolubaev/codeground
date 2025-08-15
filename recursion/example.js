const recursion = (num) => {
	if (num === 0) return 0
	console.log(num)
	recursion(num - 1)
}
// Output: 3, 2, 1, undefined
console.log(recursion(3))

const recursion2 = (num) => {
	if (num === 0) return 0
	recursion2(num - 1)
	console.log(num)
}

// Output: 1, 2, 3, undefined
console.log(recursion2(3))

const recursion3 = (num) => {
	if (num === 0) return 0
	console.log('Before recursion call:', num)
	recursion3(num - 1)
	console.log('After recursion call:', num)
}

// Output: Before recursion call: 3
//         Before recursion call: 2
//         Before recursion call: 1
//         After recursion call: 1
//         After recursion call: 2
//         After recursion call: 3
// undefined
console.log(recursion3(3))
