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

class MaxHeap {
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
			if (this.heap[parentIndex] >= this.heap[index]) break
			this.swap(parentIndex, index)
			index = parentIndex
		}
	}

	extractMax() {
		if (this.heap.length === 0) return null
		if (this.heap.length === 1) return this.heap.pop()

		const max = this.heap[0]
		this.heap[0] = this.heap.pop()
		this.heapifyDown()
		return max
	}

	heapifyDown() {
		let index = 0
		while (this.getLeftChildIndex(index) < this.heap.length) {
			let largerChildIndex = this.getLeftChildIndex(index)
			let rightChildIndex = this.getRightChildIndex(index)

			if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] > this.heap[largerChildIndex]) {
				largerChildIndex = rightChildIndex
			}

			if (this.heap[index] >= this.heap[largerChildIndex]) break
			this.swap(index, largerChildIndex)
			index = largerChildIndex
		}
	}

	print() {
		console.log(this.heap)
	}
}

// Example Usage
const maxHeap = new MaxHeap()
maxHeap.insert(10)
maxHeap.insert(5)
maxHeap.insert(20)
maxHeap.insert(2)
maxHeap.print() // [20, 10, 5, 2]
console.log(maxHeap.extractMax()) // 20
maxHeap.print() // [10, 2, 5]
