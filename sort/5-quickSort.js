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

	return [...quickSort(left), pivot, ...quickSort(right)]
}

// Example
console.log(quickSort([5, 8, 4, 2, 7]))
