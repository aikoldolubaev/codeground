// LeetCode 934. Shortest Bridge
// https://leetcode.com/problems/shortest-bridge/description/

function shortestBridge(grid) {
	const directions = [
		[1, 0],
		[-1, 0],
		[0, 1],
		[0, -1],
	]
	const queue = []

	const seen = Array.from({ length: grid.length }, () => Array(grid.length).fill(false))
	// Array.from({ length: 2 }) => [undefined, undefined]
	// Array(2).fill(false) => [false, false]
	// Array.from({ length: 2 }, () => Array(2).fill(false)) ==> [[false, false], [false, false]]

	// 1) Find and mark the first island; push all its cells into queue
	let found = false
	function dfs(row, col) {
		if (row < 0 || col < 0 || row >= grid.length || col >= grid.length) return
		if (seen[row][col] || grid[row][col] === 0) return
		seen[row][col] = true
		queue.push([row, col]) // for BFS later
		grid[row][col] = 2 // mark first island
		for (const [dRow, dCol] of directions) dfs(row + dRow, col + dCol)
	}

	for (let row = 0; row < grid.length && !found; row++) {
		for (let col = 0; col < grid.length && !found; col++) {
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
			const [gridRow, gridCol] = queue.shift()
			for (const [deltaRow, deltaCol] of directions) {
				const nextRow = gridRow + deltaRow,
					nextCol = gridCol + deltaCol
				if (nextRow < 0 || nextCol < 0 || nextRow >= grid.length || nextCol >= grid.length) continue
				if (seen[nextRow][nextCol]) continue

				if (grid[nextRow][nextCol] === 1) {
					// reached the second island
					return steps
				}

				// water: expand
				seen[nextRow][nextCol] = true
				queue.push([nextRow, nextCol])
			}
		}
		steps++
	}
	return -1 // should not happen
}

console.log(
	shortestBridge([
		[0, 1],
		[1, 0],
	])
) // 1

console.log(
	shortestBridge([
		[0, 1, 0],
		[0, 0, 0],
		[0, 0, 1],
	])
) // 2
