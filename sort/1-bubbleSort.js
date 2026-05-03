const bubbleSort = (arr) => {
	// Bubble sort: repeatedly step through the array and swap adjacent elements if they're in wrong order
	for (let i = 0; i < arr.length - 1; i++) {
		// Inner loop goes from end backwards to i, bubbling smaller elements towards the start
		for (let j = arr.length - 1; j > i; j--) {
			// Compare current with previous element
			if (arr[j - 1] > arr[j]) {
				// Swap
				let temp = arr[j - 1]
				arr[j - 1] = arr[j]
				arr[j] = temp
			}
		}
	}

	return arr
}

// Example usage
console.log(bubbleSort([64, 25, 12, 22, 11]))
