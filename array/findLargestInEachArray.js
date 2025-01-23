//find largest numbers in nested arrays
// input=>[[2, 4],[5, 6],[8, 9]] output => [ 4, 6, 9 ]

//     1 solution
function largest(arr) {
	var biggest = []
	for (let i = 0; i < arr.length; i++) {
		var first = arr[i][0] //first el in 2D array
		for (let j = 0; j < arr[i].length; j++) {
			var currentElement = arr[i][j] //each el in 2D array
			if (currentElement >= first) {
				first = currentElement
			}
		}
		biggest.push(first)
	}
	return biggest
}

console.log(
	largest([
		[2, 4],
		[5, 6],
		[8, 9],
	])
)

//       2 solution
function nest(arr) {
	var biggest = arr[0]
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > biggest) {
			biggest = arr[i]
		}
	}
	return biggest
}

function largest(arr) {
	var biggest = []
	for (var i = 0; i < arr.length; i++) {
		var innerFunc = nest(arr[i])
		biggest.push(innerFunc)
	}
	return biggest
}

console.log(
	largest([
		[2, 4],
		[5, 6],
		[8, 9],
	])
)
