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
		if (visited.has(current)) return visited.get(current)

		const clone = new Node(current.val)
		visited.set(current, clone)

		for (const neighbor of current.neighbors) {
			clone.neighbors.push(dfs(neighbor)) // recursive deep copy
		}

		return clone
	}

	return dfs(node)
}

console.log(cloneGraph(new Node(1, [new Node(2), new Node(3)]))) // Node { val: 1, neighbors: [ Node { val: 2, neighbors: [] }, Node { val: 3, neighbors: [] } ] }
console.log(cloneGraph(null)) // null
