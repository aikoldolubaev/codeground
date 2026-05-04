class Node {
	constructor(val) {
		this.next = null
		this.value = val
	}
}

class SinglyLinkedList {
	constructor() {
		this.head = null
		this.tail = null
		this.length = 0
	}
	insert(val) {
		var newNode = new Node(val)
		if (!this.head) {
			this.head = newNode
			this.tail = this.head
		} else {
			this.tail.next = newNode //new SinglyLinkedList.tail.next = newNode;
			this.tail = newNode //new SinglyLinkedList.tail = newNode;
		}
		this.length++
		return this
	}
	pop() {
		var current = this.head
		var newTail = current
		while (current.next) {
			newTail = current
			current = current.next //current.next.next.next;
		}
		this.tail = newTail //prev node
		this.tail.next = null //removing node
		this.length--
		if (this.length === 0) {
			// edge case if there no node left
			this.head = null
			this.tail = null
		}
		return current
	}

	reverse() {
		//swapping the head & tail
		var node = this.head
		this.head = this.tail
		this.tail = node

		// var next = null;
		var prev = null //=> next: null;
		for (let i = 0; i < this.length; i++) {
			//swapping arrows next & prev
			var next = node.next
			node.next = prev
			prev = node
			node = next //next:undefined;
		}
		return this
	}

	reverse2(list) {
		let current = list
		let next = null
		let prev = null
		while (current) {
			let next = current.next
			current.next = prev
			next.next = current
			prev = current
			current = next
		}
		return list
	}

	// Do the reverse recursive way now
	reverseRecursiveWay() {}

	mergeLists(listOne, listTwo) {
		const result = { val: null, next: null }
		const curr = result

		while (listOne && listTwo) {
			if (listOne.val < listTwo.val) {
				curr.next = listOne
				listOne = listOne.next
			} else {
				// counter = 0
				curr.next = listTwo
				// counter++;
				listTwo = listTwo.next
			}
			// result.push(curr)
			curr = curr.next
		}
		// whichever is left push to result
		curr.next = listOne || listTwo
		return result.next
	}
}

var ssl = new SinglyLinkedList()
ssl.insert('1')
ssl.insert('2')
ssl.insert('3')
ssl.reverse()
console.log(ssl)
