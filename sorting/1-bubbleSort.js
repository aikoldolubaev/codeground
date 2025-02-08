const bubbleSort = (arr) => {
	for (let i = 0; i < arr.length; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[i] > arr[j]) {
				let temp = arr[i]
				arr[i] = arr[j]
				arr[j] = temp
				// [arr[i], arr[j]] = [arr[j], arr[i]]
			}
		}
	}

	return arr
}

// Example usage
console.log(bubbleSort([64, 25, 12, 22, 11]))
