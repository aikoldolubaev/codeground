// K largest elements, sorting, priority queue
class MinHeap {
	constructor() {
		this.heap = []
	}

	getParentIndex(i) {
		return Math.floor((i - 1) / 2)
	}
	getLeftChildIndex(i) {
		return 2 * i + 1
	}
	getRightChildIndex(i) {
		return 2 * i + 2
	}

	swap(i, j) {
		;[this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]
	}

	insert(value) {
		this.heap.push(value)
		this.heapifyUp()
	}

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
