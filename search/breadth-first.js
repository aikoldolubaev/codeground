function bfs(graph, startNode) {
	const visited = new Set()
	const queue = [startNode]

	while (queue.length > 0) {
		const node = queue.shift() // Dequeue
		if (!visited.has(node)) {
			console.log(node) // Process the node
			visited.add(node)

			// Enqueue unvisited neighbors
			for (const neighbor of graph[node]) {
				if (!visited.has(neighbor)) {
					queue.push(neighbor)
				}
			}
		}
	}
}

// Example graph as an adjacency list
const graphBFS = {
	A: ['B', 'C'],
	B: ['A', 'D', 'E'],
	C: ['A', 'F'],
	D: ['B'],
	E: ['B', 'F'],
	F: ['C', 'E'],
}

bfs(graphBFS, 'A') // Output: A B C D E F

// EXAMPLE 2
// Make use of Queue
const bfs2 = () => {
	const node = this.root
	const visitedNodes = []
	const queue = []
	queue.push(node)
	while (queue.length) {
		node = queue.shift()
		visitedNodes.push(node)
		if (node.left) queue.push(node.left)
		if (node.right) queue.push(node.right)
	}
	return visitedNodes
}
