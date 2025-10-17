// LeetCode 934. Shortest Bridge
function shortestBridge(grid) {
	const gridLength = grid.length
	const directions = [
		[1, 0],
		[-1, 0],
		[0, 1],
		[0, -1],
	]
	const queue = []
	const seen = Array.from({ length: gridLength }, () => Array(gridLength).fill(false))

	// 1) Find and mark the first island; push all its cells into queue
	let found = false
	function dfs(row, col) {
		if (row < 0 || col < 0 || row >= gridLength || col >= gridLength) return
		if (seen[row][col] || grid[row][col] === 0) return
		seen[row][col] = true
		queue.push([row, col]) // for BFS later
		grid[row][col] = 2 // mark first island
		for (const [dr, dc] of directions) dfs(row + dr, col + dc)
	}

	for (let row = 0; row < gridLength && !found; row++) {
		for (let col = 0; col < gridLength && !found; col++) {
			if (grid[row][col] === 1) {
				dfs(row, col)
				found = true
			}
		}
	}

	// 2) BFS outward from the first island until we touch the second island
	let steps = 0
	while (queue.length) {
		const size = queue.length
		for (let s = 0; s < size; s++) {
			const [r, c] = queue.shift()
			for (const [dr, dc] of directions) {
				const nr = r + dr,
					nc = c + dc
				if (nr < 0 || nc < 0 || nr >= gridLength || nc >= gridLength) continue
				if (seen[nr][nc]) continue

				if (grid[nr][nc] === 1) {
					// reached the second island
					return steps
				}

				// water: expand
				seen[nr][nc] = true
				queue.push([nr, nc])
			}
		}
		steps++
	}
	return -1 // should not happen
}

console.log(
	shortestBridge([
		[0, 1, 0],
		[0, 0, 0],
		[0, 0, 1],
	])
) // 2
