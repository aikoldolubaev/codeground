// LeetCode 261. Graph Valid Tree
// https://leetcode.com/problems/graph-valid-tree/description/
// Free:
// https://www.lintcode.com/problem/178/

// Build the graph as an adjacency list
const graph = Array.from({ length: nodesCount }, () => [])
for (const [u, v] of edges) {
	graph[u].push(v)
	graph[v].push(u)
}

function isValidTree(nodesCount, edges) {
	if (edges.length !== nodesCount - 1) return false

	const visited = new Set()

	const dfs = (node, parent) => {
		visited.add(node)
		for (const neighborNode of graph[node]) {
			if (neighborNode === parent) continue // ignore the edge back to parent
			if (visited.has(neighborNode)) return false // cycle
			if (!dfs(neighborNode, node)) return false
		}
		return true
	}

	// start from 0 (or any node)
	if (!dfs(0, -1)) return false
	return visited.size === nodesCount // connected
}

// Example usage:
console.log(
	isValidTree(5, [
		[0, 1],
		[0, 2],
		[0, 3],
		[1, 4],
	])
) // true
