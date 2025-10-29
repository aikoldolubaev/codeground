// LeetCode 994. Rotting Oranges
// https://leetcode.com/problems/rotting-oranges/description/

function orangesRotting(grid) {
	const queue = [] // elements: [r, c, minute]
	let fresh = 0
	let minutes = 0

	// init: collect rotten, count fresh
	for (let r = 0; r < grid.length; r++) {
		for (let c = 0; c < grid[0].length; c++) {
			if (grid[r][c] === 2) queue.push([r, c, 0])
			else if (grid[r][c] === 1) fresh++
		}
	}
	if (fresh === 0) return 0 // nothing to rot

	// directions: down, up, right, left
	const dirs = [
		[1, 0],
		[-1, 0],
		[0, 1],
		[0, -1],
	]

	// BFS
	while (queue.length) {
		const [r, c, t] = queue.shift()
		for (const [dr, dc] of dirs) {
			const nr = r + dr,
				nc = c + dc
			if (nr < 0 || nr >= grid.length || nc < 0 || nc >= grid[0].length) continue
			if (grid[nr][nc] !== 1) continue // not fresh
			grid[nr][nc] = 2 // now rotten
			fresh--
			minutes = t + 1 // track last time used
			queue.push([nr, nc, minutes])
		}
	}

	return fresh === 0 ? minutes : -1
}

const grid = [
	[2, 1, 1],
	[1, 1, 0],
	[0, 1, 1],
]

console.log(orangesRotting(grid)) // 4
