// LeetCode 994. Rotting Oranges
// https://leetcode.com/problems/rotting-oranges/description/

function orangesRotting(grid) {
	const queue = []
	let fresh = 0
	let minutes = 0

	// Initialize the queue with all rotten oranges and count fresh ones
	for (let row = 0; row < grid.length; row++) {
		for (let c = 0; c < grid[0].length; c++) {
			if (grid[row][c] === 2) queue.push([row, c, 0])
			else if (grid[row][c] === 1) fresh++
		}
	}
	if (fresh === 0) return 0 // nothing to rot

	const directions = [
		[1, 0], // down
		[-1, 0], // up
		[0, 1], // right
		[0, -1], // left
	]

	// BFS
	while (queue.length) {
		const [row, col, time] = queue.shift()
		for (const [dirRow, dirCol] of directions) {
			const newRow = row + dirRow
			const newCol = col + dirCol
			if (newRow < 0 || newRow >= grid.length || newCol < 0 || newCol >= grid[0].length) continue
			if (grid[newRow][newCol] !== 1) continue // not fresh
			grid[newRow][newCol] = 2 // now rotten
			fresh--
			minutes = time + 1 // track last time used
			queue.push([newRow, newCol, minutes])
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
