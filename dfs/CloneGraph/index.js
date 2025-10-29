// LeetCode 133. Clone Graph
// https://leetcode.com/problems/clone-graph/description/

class Node {
	constructor(val, neighbors = []) {
		this.val = val
		this.neighbors = neighbors
	}
}

function cloneGraph(node) {
	if (!node) return null

	const visited = new Map() // original node -> cloned node

	function dfs(current) {
		// If the node is already cloned, return the clone
		if (visited.has(current)) return visited.get(current)

		// Clone the node
		const clone = new Node(current.val)
		// Mark the clone as visited: key: original node, value: cloned node
		visited.set(current, clone)

		// Recursively clone neighbors
		for (const neighbor of current.neighbors) {
			// If the neighbor is already cloned, reuse the clone
			clone.neighbors.push(dfs(neighbor)) // dfs
		}

		return clone
	}

	return dfs(node)
}

const graph = new Node(1, [new Node(2), new Node(3)])
console.log(cloneGraph(graph)) // Node { val: 1, neighbors: [ Node { val: 2, neighbors: [] }, Node { val: 3, neighbors: [] } ] }
console.log(cloneGraph(null)) // null
