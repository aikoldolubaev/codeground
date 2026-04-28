// FIFO - First In, First Out
class Queue {
	constructor() {
		this.queue = []
	}

	// Enqueue (Add element to the back)
	enqueue(value) {
		this.queue.push(value)
	}

	// Dequeue (Remove element from the front)
	dequeue() {
		return this.queue.length ? this.queue.shift() : null
	}

	// Peek (View front element)
	peek() {
		return this.queue.length ? this.queue[0] : null
	}

	// Check if queue is empty
	isEmpty() {
		return this.queue.length === 0
	}

	// Get queue size
	size() {
		return this.queue.length
	}

	// Print queue
	print() {
		console.log(this.queue.join(' <- '))
	}
}

// Example Usage
const queue = new Queue()
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.print() // 10 <- 20 <- 30
console.log(queue.dequeue()) // 10
console.log(queue.peek()) // 20
console.log(queue.isEmpty()) // false
