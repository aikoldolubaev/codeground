// Swapping adjacent elements if they are in the wrong order
const bubbleSort = (arr) => {
	for (let i = 0; i < arr.length - 1; i++) {
		// After each pass, the largest element is bubbled to the end, so we can ignore the last i elements
		for (let j = 0; j < arr.length - i; j++) {
			let current = arr[j]
			let next = arr[j + 1]
			if (current > next) {
				let temp = current
				arr[j] = next
				arr[j + 1] = temp
			}
		}
	}

	return arr
}

// Example usage
console.log(bubbleSort([64, 25, 12, 1, 22, 11]))
