// K smallest elements, sorting, priority queue
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
		let lastIndex = this.heap.length - 1
		// While not at the root and parent is less than current
		while (lastIndex > 0) {
			let parentIndex = this.getParentIndex(lastIndex)
			// If parent is greater or equal than last index, we're done
			if (this.heap[parentIndex] >= this.heap[lastIndex]) break
			this.swap(parentIndex, lastIndex)
			// Move up to parent index
			lastIndex = parentIndex
		}
	}

	heapifyDown() {
		let index = 0
		const hasLeftChild = this.getLeftChildIndex(index) < this.heap.length
		while (hasLeftChild) {
			let leftChildIndex = this.getLeftChildIndex(index)
			let rightChildIndex = this.getRightChildIndex(index)

			const hasRightChild = this.getRightChildIndex(index) < this.heap.length
			const isRightChildBigger = this.heap[rightChildIndex] > this.heap[leftChildIndex]
			if (hasRightChild && isRightChildBigger) {
				leftChildIndex = rightChildIndex
			}

			// If current is greater or equal than left child
			if (this.heap[index] >= this.heap[leftChildIndex]) break
			this.swap(index, leftChildIndex)
			index = leftChildIndex
		}
	}

	// Extract max (remove root)
	extractMax() {
		if (this.heap.length === 0) return null
		if (this.heap.length === 1) return this.heap.pop()

		const max = this.heap[0]
		this.heap[0] = this.heap.pop()
		this.heapifyDown()
		return max
	}

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
		this.heapifyDownFrom(index)
		this.heapifyUpFrom(index)
		return true
	}

	heapifyDownFrom(index) {
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

	heapifyUpFrom(index) {
		while (index > 0) {
			let parentIndex = this.getParentIndex(index)
			if (this.heap[parentIndex] >= this.heap[index]) break
			this.swap(parentIndex, index)
			index = parentIndex
		}
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
