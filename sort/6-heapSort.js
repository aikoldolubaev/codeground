function heapSort(arr) {
	let n = arr.length

	// Build max heap
	for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
		heapify(arr, n, i)
	}

	// Extract elements one by one
	for (let i = n - 1; i > 0; i--) {
		// Move current root to end
		;[arr[0], arr[i]] = [arr[i], arr[0]]

		// Call max heapify on reduced heap
		heapify(arr, i, 0)
	}
	return arr
}

function heapify(arr, n, i) {
	let largest = i // Root
	let left = 2 * i + 1 // Left child
	let right = 2 * i + 2 // Right child

	// If left child is larger
	if (left < n && arr[left] > arr[largest]) {
		largest = left
	}

	// If right child is larger
	if (right < n && arr[right] > arr[largest]) {
		largest = right
	}

	// If largest is not root
	if (largest !== i) {
		;[arr[i], arr[largest]] = [arr[largest], arr[i]]
		heapify(arr, n, largest) // Recursively heapify affected subtree
	}
}

// Example
console.log(heapSort([12, 11, 13, 5, 6, 7]))
// [5, 6, 7, 11, 12, 13]
