// A Binary Tree is a tree where each node has at most two children.
class Node {
	constructor(value) {
		this.value = value
		this.left = null
		this.right = null
	}
}

class BinaryTree {
	constructor() {
		this.root = null
	}

	// Insert nodes level-wise (like a complete binary tree)
	insert(value) {
		const newNode = new Node(value)
		if (!this.root) {
			this.root = newNode
			return
		}

		let queue = [this.root]
		while (queue.length) {
			let current = queue.shift()

			if (!current.left) {
				current.left = newNode
				return
			}
			queue.push(current.left)

			if (!current.right) {
				current.right = newNode
				return
			}
			queue.push(current.right)
		}
	}

	// Preorder Traversal (Root -> Left -> Right)
	preorder(node = this.root) {
		if (!node) return
		console.log(node.value)
		this.preorder(node.left)
		this.preorder(node.right)
	}

	// Inorder Traversal (Left -> Root -> Right)
	inorder(node = this.root) {
		if (!node) return
		this.inorder(node.left)
		console.log(node.value)
		this.inorder(node.right)
	}

	// Postorder Traversal (Left -> Right -> Root)
	postorder(node = this.root) {
		if (!node) return
		this.postorder(node.left)
		this.postorder(node.right)
		console.log(node.value)
	}

	// Level Order Traversal (Breadth-First Search)
	levelOrder() {
		if (!this.root) return
		let queue = [this.root]
		while (queue.length) {
			let current = queue.shift()
			console.log(current.value)
			if (current.left) queue.push(current.left)
			if (current.right) queue.push(current.right)
		}
	}
}

// Example Usage
const tree = new BinaryTree()
tree.insert(10)
tree.insert(20)
tree.insert(30)
tree.insert(40)
tree.insert(50)

console.log('Preorder:')
tree.preorder() // 10, 20, 40, 50, 30

console.log('Inorder:')
tree.inorder() // 40, 20, 50, 10, 30

console.log('Postorder:')
tree.postorder() // 40, 50, 20, 30, 10

console.log('Level Order:')
tree.levelOrder() // 10, 20, 30, 40, 50
