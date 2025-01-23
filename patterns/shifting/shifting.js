//find the biggest subset
const subset = (arr, num) => {
	let max = 0
	for (let i = 0; i < arr.length - num + 1; i++) {
		let temp = 0
		for (let j = 0; j < num; j++) {
			temp += arr[i + j] //temp kelip each element-ti kowoberet
		}
		if (temp > max) {
			max = temp
		}
	}
	return max
}
subset([1, 6, 5, 2, 5, 3, 8], 2) //11
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const subset2 = (arr, num) => {
	let max = 0 //7
	let temp = 0 //0
	for (let i = 0; i < num; i++) {
		max += arr[i] //1+6=7
	}
	temp = max //7
	for (let i = num; i < arr.length; i++) {
		temp = temp - arr[i - num] + arr[i] //current - prev + next
		if (max < temp) {
			max = temp
		}
	}
	return max
}
subset2([1, 6, 5, 2, 5, 3, 8], 2) //11
