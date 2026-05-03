const selectionSort = (arr) => {
	for (let i = 0; i < arr.length; i++) {
		let minIndex = i
		for (let j = i + 1; j < arr.length; j++) {
			// Find the index of the minimum element
			if (arr[j] < arr[minIndex]) {
				minIndex = j
			}
		}
		if (minIndex !== i) {
			let current = arr[i]
			arr[i] = arr[minIndex]
			arr[minIndex] = current
			// [arr[i], arr[minsIndex]] = [arr[minsIndex], arr[i]]
		}
	}
	return arr
}

console.log(selectionSort([4, 3, 2, 1, 5]))
