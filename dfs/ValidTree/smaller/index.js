// LeetCode 261. Graph Valid Tree
// https://leetcode.com/problems/graph-valid-tree/description/
// Free:
// https://www.lintcode.com/problem/178/

function isValidTree(nodesCount, edges) {
	// Build the graph as an adjacency list
	const graph = Array.from({ length: nodesCount }, () => []) //  [[],[],[]]
	for (const [parentNode, childNode] of edges) {
		graph[parentNode].push(childNode)
		graph[childNode].push(parentNode)
	}
	// graph: index is a node Ajecency List => [[1,2],[0],[0]]

	const visited = new Set()

	const dfs = (node, parent) => {
		visited.add(node)
		for (const childNode of graph[node]) {
			if (childNode === parent) continue // ignore the edge back to parent
			if (visited.has(childNode)) return false // cycle
			if (!dfs(childNode, node)) return false
		}
		// all good
		return true
	}

	// start from 0 (or any node)
	if (!dfs(0, -1)) return false
	return visited.size === nodesCount // connected
}

console.log(
	isValidTree(3, [
		[0, 1],
		[0, 2],
	])
) // true
