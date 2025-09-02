function quickSort(arr) {
	if (arr.length <= 1) return arr // base case

	const pivot = arr[arr.length - 1] // pick last element as pivot
	const left = []
	const right = []

	for (let i = 0; i < arr.length - 1; i++) {
		if (arr[i] < pivot) {
			left.push(arr[i]) // smaller goes left
		} else {
			right.push(arr[i]) // bigger goes right
		}
	}

	// recursively sort left + pivot + right
	return [...quickSort(left), pivot, ...quickSort(right)]
}

// Example
console.log(quickSort([5, 3, 8, 4, 2, 7, 1]))
// [1, 2, 3, 4, 5, 7, 8]
