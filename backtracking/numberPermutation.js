const permuteNumbers = (numbers) => {
	const permutations = []
	// base case
	if (numbers.length === 0) return [[]]

	const firstNumber = numbers[0]
	const leftNumbers = numbers.slice(1)

	const perms = permuteNumbers(leftNumbers)

	perms.forEach((nums) => {
		for (let j = 0; j <= nums.length; j++) {
			permutations.push([...nums.slice(0, j), firstNumber, ...nums.slice(j)])
		}
	})

	return permutations
}

// Input:
console.log(permuteNumbers([1, 2, 3]))
/*
Output:
[
  [ 1, 2, 3 ],
  [ 2, 1, 3 ],
  [ 2, 3, 1 ],
  [ 1, 3, 2 ],
  [ 3, 1, 2 ],
  [ 3, 2, 1 ]
]
*/

const decreaseByOne = (number) => {
	console.log('num', number)
	if (!number) {
		return number
	}

	const result = decreaseByOne(number - 1)
	console.log('result', result)
	console.log('number', number)
	return result
}

console.log(decreaseByOne(5))
/*
num 5
num 4
num 3
num 2
num 1
num 0
result 0
number 1
result 0
number 2
result 0
number 3
result 0
number 4
result 0
number 5
0
*/

const decreaseByOne2 = (number) => {
	console.log('num', number)
	if (!number) {
		return number
	}

	decreaseByOne(number - 1)
	console.log('number', number)
	return number
}

console.log(decreaseByOne2(5))
/*
num 5
num 4
num 3
num 2
num 1
num 0
number 1
number 2
number 3
number 4
number 5
5
*/
