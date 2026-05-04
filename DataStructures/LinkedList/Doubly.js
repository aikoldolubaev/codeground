class Node {
	constructor(value) {
		this.value = value
		this.next = null
		this.prev = null
	}
}

class DoublyLinkedList {
	constructor() {
		this.head = null
		this.tail = null
		this.length = 0
	}

	// Add node to the end
	append(value) {
		const newNode = new Node(value)
		if (!this.head) {
			this.head = this.tail = newNode
		} else {
			this.tail.next = newNode
			newNode.prev = this.tail
			this.tail = newNode
		}
		this.length++
	}

	// Add node to the beginning
	prepend(value) {
		const newNode = new Node(value)
		if (!this.head) {
			this.head = this.tail = newNode
		} else {
			newNode.next = this.head
			this.head.prev = newNode
			this.head = newNode
		}
		this.length++
	}

	// Delete node by value
	delete(value) {
		if (!this.head) return

		if (this.head.value === value) {
			this.head = this.head.next
			if (this.head) this.head.prev = null
			else this.tail = null // If the list becomes empty
			this.length--
			return
		}

		let current = this.head
		while (current && current.value !== value) {
			current = current.next
		}

		if (current) {
			if (current.next) current.next.prev = current.prev
			if (current.prev) current.prev.next = current.next
			if (current === this.tail) this.tail = current.prev
			this.length--
		}
	}

	// Print list forward
	printForward() {
		let current = this.head
		let result = []
		while (current) {
			result.push(current.value)
			current = current.next
		}
		console.log('Forward:', result.join(' ⇄ '))
	}

	// Print list backward
	printBackward() {
		let current = this.tail
		let result = []
		while (current) {
			result.push(current.value)
			current = current.prev
		}
		console.log('Backward:', result.join(' ⇄ '))
	}
}

// Example Usage
const list = new DoublyLinkedList()
list.append(10)
list.append(20)
list.prepend(5)
list.printForward() // Forward: 5 ⇄ 10 ⇄ 20
list.printBackward() // Backward: 20 ⇄ 10 ⇄ 5
list.delete(10)
list.printForward() // Forward: 5 ⇄ 20
