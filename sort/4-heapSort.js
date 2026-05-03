function heapSort(arr) {
	// Build a maxheap
	for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
		heapify(arr, arr.length, i)
	}

	// Extract elements one by one
	for (let i = arr.length - 1; i > 0; i--) {
		let temp = arr[0]
		arr[0] = arr[i]
		arr[i] = temp
		heapify(arr, i, 0)
	}
	return arr
}

function heapify(arr, n, i) {
	let largest = i // root
	let leftChild = 2 * i + 1
	let rightChild = 2 * i + 2

	// If left child is larger
	if (leftChild < n && arr[leftChild] > arr[largest]) {
		largest = leftChild
	}

	// If right child is larger
	if (rightChild < n && arr[rightChild] > arr[largest]) {
		largest = rightChild
	}

	// If largest is not root
	if (largest !== i) {
		;[arr[i], arr[largest]] = [arr[largest], arr[i]]
		heapify(arr, n, largest) // Recursively heapify affected subtree
	}
}

// Example
console.log(heapSort([12, 1, 13, 5, 6, 7]))
// [5, 6, 7, 11, 12, 13]
