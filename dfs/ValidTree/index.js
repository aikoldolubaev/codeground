// LeetCode 261. Graph Valid Tree
// https://leetcode.com/problems/graph-valid-tree/description/
// Free:
// https://www.lintcode.com/problem/178/

function validTreeDFS(n, edges) {
	if (edges.length !== n - 1) return false

	const graph = Array.from({ length: n }, () => [])
	for (const [u, v] of edges) {
		graph[u].push(v)
		graph[v].push(u)
	}

	const visited = new Set()

	const dfs = (node, parent) => {
		visited.add(node)
		for (const nei of graph[node]) {
			if (nei === parent) continue // ignore the edge back to parent
			if (visited.has(nei)) return false // cycle
			if (!dfs(nei, node)) return false
		}
		return true
	}

	// start from 0 (or any node)
	if (!dfs(0, -1)) return false
	return visited.size === n // connected
}

// Example usage:
console.log(
	validTreeDFS(5, [
		[0, 1],
		[0, 2],
		[0, 3],
		[1, 4],
	])
) // true
