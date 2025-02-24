// LIFO - Last In, First Out
class Stack {
	constructor() {
		this.stack = []
	}

	// Push element onto stack
	push(value) {
		this.stack.push(value)
	}

	// Remove and return top element
	pop() {
		return this.stack.length ? this.stack.pop() : null
	}

	// View the top element
	peek() {
		return this.stack.length ? this.stack[this.stack.length - 1] : null
	}

	// Check if stack is empty
	isEmpty() {
		return this.stack.length === 0
	}

	// Get the size of the stack
	size() {
		return this.stack.length
	}

	// Print stack
	print() {
		console.log(this.stack.join(' -> '))
	}
}

// Example Usage
const stack = new Stack()
stack.push(10)
stack.push(20)
stack.push(30)
stack.print() // 10 -> 20 -> 30
console.log(stack.pop()) // 30
console.log(stack.peek()) // 20
console.log(stack.isEmpty()) // false
