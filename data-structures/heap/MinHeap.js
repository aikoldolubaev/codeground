// MinHeap is a binary heap data structure where the parent node is always less than or equal to its child nodes.
// This ensures that the smallest element is always at the root (index 0) of the heap array.
// The main operations are insert (adds a new element and maintains the heap property) and extractMin (removes and returns the smallest element).
// The heap is implemented using an array for efficient access and manipulation.
class MinHeap {
	constructor() {
		this.heap = []
	}

	// Get parent/child indices
	getParentIndex(i) {
		return Math.floor((i - 1) / 2)
	}
	getLeftChildIndex(i) {
		return 2 * i + 1
	}
	getRightChildIndex(i) {
		return 2 * i + 2
	}

	// Swap helper
	swap(i, j) {
		;[this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]
	}

	// Insert value into heap
	insert(value) {
		this.heap.push(value)
		this.heapifyUp()
	}

	// Heapify up (to maintain heap property)
	heapifyUp() {
		let index = this.heap.length - 1
		while (index > 0) {
			let parentIndex = this.getParentIndex(index)
			if (this.heap[parentIndex] <= this.heap[index]) break
			this.swap(parentIndex, index)
			index = parentIndex
		}
	}

	// Extract min (remove root)
	extractMin() {
		if (this.heap.length === 0) return null
		if (this.heap.length === 1) return this.heap.pop()

		const min = this.heap[0]
		this.heap[0] = this.heap.pop()
		this.heapifyDown()
		return min
	}

	// Heapify down (to maintain heap property)
	heapifyDown() {
		let index = 0
		while (this.getLeftChildIndex(index) < this.heap.length) {
			let smallerChildIndex = this.getLeftChildIndex(index)
			let rightChildIndex = this.getRightChildIndex(index)

			if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[smallerChildIndex]) {
				smallerChildIndex = rightChildIndex
			}

			if (this.heap[index] <= this.heap[smallerChildIndex]) break
			this.swap(index, smallerChildIndex)
			index = smallerChildIndex
		}
	}

	// Print heap
	print() {
		console.log(this.heap)
	}

	// Delete a specific value from the heap
	delete(value) {
		const index = this.heap.indexOf(value)
		if (index === -1) return false // Value not found

		// Swap with last and remove
		this.swap(index, this.heap.length - 1)
		this.heap.pop()

		// Restore heap property
		// Try heapifyDown first, if not moved, then heapifyUp
		this.heapifyDownFrom(index)
		this.heapifyUpFrom(index)
		return true
	}

	heapifyDownFrom(index) {
		while (this.getLeftChildIndex(index) < this.heap.length) {
			let smallerChildIndex = this.getLeftChildIndex(index)
			let rightChildIndex = this.getRightChildIndex(index)

			if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[smallerChildIndex]) {
				smallerChildIndex = rightChildIndex
			}

			if (this.heap[index] <= this.heap[smallerChildIndex]) break
			this.swap(index, smallerChildIndex)
			index = smallerChildIndex
		}
	}

	heapifyUpFrom(index) {
		while (index > 0) {
			let parentIndex = this.getParentIndex(index)
			if (this.heap[parentIndex] <= this.heap[index]) break
			this.swap(parentIndex, index)
			index = parentIndex
		}
	}
}

// Example Usage
const minHeap = new MinHeap()
minHeap.insert(10)
minHeap.insert(5)
minHeap.insert(20)
minHeap.insert(2)
minHeap.print() // [2, 5, 20, 10]
console.log(minHeap.extractMin()) // 2
minHeap.print() // [5, 10, 20]
