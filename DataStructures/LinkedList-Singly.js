class Node {
	constructor(value) {
		this.value = value
		this.next = null
	}
}

class SinglyLinkedList {
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
			this.head = newNode
		}
		this.length++
	}

	// Delete node by value
	delete(value) {
		if (!this.head) return

		if (this.head.value === value) {
			this.head = this.head.next
			this.length--
			return
		}

		let current = this.head
		while (current.next && current.next.value !== value) {
			current = current.next
		}

		if (current.next) {
			current.next = current.next.next
			if (!current.next) this.tail = current // Update tail if last node is deleted
			this.length--
		}
	}

	// Print list
	print() {
		let current = this.head
		let result = []
		while (current) {
			result.push(current.value)
			current = current.next
		}
		console.log(result.join(' -> '))
	}
}

// Example Usage
const list = new SinglyLinkedList()
list.append(10)
list.append(20)
list.prepend(5)
list.print() // 5 -> 10 -> 20
list.delete(10)
list.print() // 5 -> 20
