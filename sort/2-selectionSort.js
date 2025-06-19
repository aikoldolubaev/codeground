const selectionSort = (arr) => {
	for (let i = 0; i < arr.length; i++) {
		let minIndex = i
		for (let j = i + 1; j < arr.length; j++) {
			// Find the index of the minimum element
			if (arr[j] < arr[minIndex]) {
				minIndex = j
			}
		}
		// if the minimum element is not the current element
		if (minIndex !== i) {
			// Swap the found minimum element with the current element
			let temp = arr[i]
			arr[i] = arr[minIndex]
			arr[minIndex] = temp
			// [arr[i], arr[minsIndex]] = [arr[minsIndex], arr[i]]
		}
	}
	return arr
}

console.log(selectionSort([4, 3, 2, 1, 5]))
