// Singly Linked List is just nested objects
// { value: 'a', next: { value: 'b', next: { value: 'c', next: null } } }

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

	/**
	 * Append value to end of list
	 * @param {*} value
	 * @returns {SinglyLinkedList}
	 */
	push(value) {
		const node = new Node(value)
		if (!this.head) {
			this.head = node
			this.tail = node
		} else {
			this.tail.next = node
			this.tail = node
		}
		this.length++
		return this
	}

	/**
	 * Remove and return last node
	 * @returns {Node|null}
	 */
	pop() {
		if (!this.head) return null
		let current = this.head
		let prev = null
		while (current.next) {
			prev = current
			current = current.next
		}
		if (prev) {
			prev.next = null
			this.tail = prev
		} else {
			// list had a single node
			this.head = null
			this.tail = null
		}
		this.length--
		return current
	}

	/**
	 * Remove and return first node
	 * @returns {Node|null}
	 */
	shift() {
		if (!this.head) return null
		const node = this.head
		this.head = node.next
		if (!this.head) this.tail = null
		this.length--
		node.next = null
		return node
	}

	/**
	 * Prepend value to start of list
	 * @param {*} value
	 * @returns {SinglyLinkedList}
	 */
	unshift(value) {
		const node = new Node(value)
		if (!this.head) {
			this.head = node
			this.tail = node
		} else {
			node.next = this.head
			this.head = node
		}
		this.length++
		return this
	}

	/**
	 * Get node at index
	 * @param {number} index
	 * @returns {Node|null}
	 */
	get(index) {
		if (index < 0 || index >= this.length) return null
		let current = this.head
		let i = 0
		while (i < index) {
			current = current.next
			i++
		}
		return current
	}

	/**
	 * Set value at index
	 * @param {number} index
	 * @param {*} value
	 * @returns {boolean}
	 */
	set(index, value) {
		const node = this.get(index)
		if (!node) return false
		node.value = value
		return true
	}

	/**
	 * Insert value at index
	 * @param {number} index
	 * @param {*} value
	 * @returns {boolean}
	 */
	insert(index, value) {
		if (index < 0 || index > this.length) return false
		if (index === 0) return !!this.unshift(value)
		if (index === this.length) return !!this.push(value)
		const prev = this.get(index - 1)
		if (!prev) return false
		const node = new Node(value)
		node.next = prev.next
		prev.next = node
		this.length++
		return true
	}

	/**
	 * Remove node at index
	 * @param {number} index
	 * @returns {Node|null}
	 */
	remove(index) {
		if (index < 0 || index >= this.length) return null
		if (index === 0) return this.shift()
		if (index === this.length - 1) return this.pop()
		const prev = this.get(index - 1)
		const removed = prev.next
		prev.next = removed.next
		removed.next = null
		this.length--
		return removed
	}

	/**
	 * Reverse list in-place
	 * @returns {SinglyLinkedList}
	 */
	reverse() {
		let prev = null
		let current = this.head
		this.tail = this.head
		while (current) {
			const next = current.next
			current.next = prev
			prev = current
			current = next
		}
		this.head = prev
		return this
	}

	/**
	 * Static helper: merge two sorted lists (given their head nodes)
	 * Returns head of merged sorted list (nodes reused)
	 * @param {Node|null} l1
	 * @param {Node|null} l2
	 * @returns {Node|null}
	 */
	static mergeSortedLists(l1, l2) {
		const dummy = new Node(null)
		let tail = dummy
		let a = l1
		let b = l2
		while (a && b) {
			if (a.value <= b.value) {
				tail.next = a
				a = a.next
			} else {
				tail.next = b
				b = b.next
			}
			tail = tail.next
		}
		tail.next = a || b
		return dummy.next
	}

	toArray() {
		const out = []
		let cur = this.head
		while (cur) {
			out.push(cur.value)
			cur = cur.next
		}
		return out
	}
}

// Example / quick test
const list = new SinglyLinkedList()
list.push(1).push(2).push(3)
console.log('list:', list.toArray())
list.reverse()
console.log('reversed:', list.toArray())
list.insert(1, 99)
console.log('after insert:', list.toArray())
console.log('removed:', list.remove(1).value)
console.log('final:', list.toArray())

// ─────────────────────────────────────────────────────────────
// ES5 (old JavaScript) version — constructor functions + prototype
// ─────────────────────────────────────────────────────────────

function Node5(value) {
	this.value = value
	this.next = null
}

function SinglyLinkedList5() {
	this.head = null
	this.tail = null
	this.length = 0
}

SinglyLinkedList5.prototype.push = function (value) {
	var node = new Node5(value)
	if (!this.head) {
		this.head = node
		this.tail = node
	} else {
		this.tail.next = node
		this.tail = node
	}
	this.length++
	return this
}

SinglyLinkedList5.prototype.pop = function () {
	if (!this.head) return null
	var current = this.head
	var prev = null
	while (current.next) {
		prev = current
		current = current.next
	}
	if (prev) {
		prev.next = null
		this.tail = prev
	} else {
		this.head = null
		this.tail = null
	}
	this.length--
	return current
}

SinglyLinkedList5.prototype.shift = function () {
	if (!this.head) return null
	var node = this.head
	this.head = node.next
	if (!this.head) this.tail = null
	this.length--
	node.next = null
	return node
}

SinglyLinkedList5.prototype.unshift = function (value) {
	var node = new Node5(value)
	if (!this.head) {
		this.head = node
		this.tail = node
	} else {
		node.next = this.head
		this.head = node
	}
	this.length++
	return this
}

SinglyLinkedList5.prototype.get = function (index) {
	if (index < 0 || index >= this.length) return null
	var current = this.head
	var i = 0
	while (i < index) {
		current = current.next
		i++
	}
	return current
}

SinglyLinkedList5.prototype.set = function (index, value) {
	var node = this.get(index)
	if (!node) return false
	node.value = value
	return true
}

SinglyLinkedList5.prototype.insert = function (index, value) {
	if (index < 0 || index > this.length) return false
	if (index === 0) return !!this.unshift(value)
	if (index === this.length) return !!this.push(value)
	var prev = this.get(index - 1)
	if (!prev) return false
	var node = new Node5(value)
	node.next = prev.next
	prev.next = node
	this.length++
	return true
}

SinglyLinkedList5.prototype.remove = function (index) {
	if (index < 0 || index >= this.length) return null
	if (index === 0) return this.shift()
	if (index === this.length - 1) return this.pop()
	var prev = this.get(index - 1)
	var removed = prev.next
	prev.next = removed.next
	removed.next = null
	this.length--
	return removed
}

SinglyLinkedList5.prototype.reverse = function () {
	var prev = null
	var current = this.head
	this.tail = this.head
	while (current) {
		var next = current.next
		current.next = prev
		prev = current
		current = next
	}
	this.head = prev
	return this
}

SinglyLinkedList5.prototype.toArray = function () {
	var out = []
	var cur = this.head
	while (cur) {
		out.push(cur.value)
		cur = cur.next
	}
	return out
}

// ── Demo: what does an SLL look like as a plain object? ──────

var sll = new SinglyLinkedList5()
sll.push('a').push('b').push('c')

// Each node is just an object: { value, next }
console.log('\n-- ES5 SLL as object --')
console.log('head node :', sll.head) // { value: 'a', next: { value: 'b', next: {...} } }
console.log('head.next :', sll.head.next) // { value: 'b', next: { value: 'c', next: null } }
console.log('tail node :', sll.tail) // { value: 'c', next: null }
console.log('full list :', JSON.stringify(sll.head, null, 2)) // nested object tree
console.log('as array  :', sll.toArray()) // ['a', 'b', 'c']
