function heapSort(arr) {
	// Build max heap
	// Start from the last non-leaf node and heapify each node
	// The last non-leaf node is at index Math.floor(arr.length / 2) - 1
	// We go backwards to ensure all subtrees are heapified
	// This step ensures the entire array satisfies the heap property
	// After this step, the largest element is at the root of the heap (index 0)
	// We then repeatedly extract the maximum element and rebuild the heap
	// This is done by swapping the root with the last element and reducing the heap size
	// We call heapify on the root to maintain the heap property
	// This process is repeated until the heap size is 1
	// The array is sorted in place
	// The sorted array is in ascending order
	for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
		// Why Math.floor(arr.length / 2) - 1? Because it's the index of the last non-leaf node
		// Heapify each node
		// We start from the last non-leaf node and go up to the root
		heapify(arr, arr.length, i)
	}

	// Extract elements one by one
	for (let i = arr.length - 1; i > 0; i--) {
		;[arr[0], arr[i]] = [arr[i], arr[0]] // Swap

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
