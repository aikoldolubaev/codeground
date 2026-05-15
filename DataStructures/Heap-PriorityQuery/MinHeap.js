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

// Priority Queue — each element has a value and a numeric priority.
// Lower priority number = higher urgency (dequeued first).
class PriorityQueue {
	constructor() {
		this.heap = [] // elements: { value, priority }
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

	enqueue(value, priority) {
		this.heap.push({ value, priority })
		this.heapifyUp()
	}

	heapifyUp() {
		let index = this.heap.length - 1
		while (index > 0) {
			const parentIndex = this.getParentIndex(index)
			if (this.heap[parentIndex].priority <= this.heap[index].priority) break
			this.swap(parentIndex, index)
			index = parentIndex
		}
	}

	dequeue() {
		if (this.heap.length === 0) return null
		if (this.heap.length === 1) return this.heap.pop()

		const top = this.heap[0]
		this.heap[0] = this.heap.pop()
		this.heapifyDown()
		return top
	}

	heapifyDown() {
		let index = 0
		while (this.getLeftChildIndex(index) < this.heap.length) {
			let smallerChildIndex = this.getLeftChildIndex(index)
			const rightChildIndex = this.getRightChildIndex(index)

			if (
				rightChildIndex < this.heap.length &&
				this.heap[rightChildIndex].priority < this.heap[smallerChildIndex].priority
			) {
				smallerChildIndex = rightChildIndex
			}

			if (this.heap[index].priority <= this.heap[smallerChildIndex].priority) break
			this.swap(index, smallerChildIndex)
			index = smallerChildIndex
		}
	}

	peek() {
		return this.heap[0] ?? null
	}

	get size() {
		return this.heap.length
	}

	print() {
		console.log(this.heap.map((n) => `${n.value}(${n.priority})`).join(', '))
	}
}

// Example Usage
const pq = new PriorityQueue()
pq.enqueue('low task', 10)
pq.enqueue('urgent task', 1)
pq.enqueue('medium task', 5)
pq.enqueue('critical task', 0)
pq.print() // critical(0), urgent(1), medium(5), low(10) — order may vary by position
console.log(pq.dequeue()) // { value: 'critical task', priority: 0 }
console.log(pq.peek()) // { value: 'urgent task', priority: 1 }
console.log(pq.size) // 3
