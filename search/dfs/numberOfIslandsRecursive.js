const numIslands = (grid) => {
	if (!grid || grid.length === 0) return 0

	let count = 0

	const dfs = (grid, row, col) => {
		// Base case
		if (
			row < 0 || // Out of top boundary
			row >= grid.length || // Out of bottom boundary
			col < 0 || // Out of left boundary
			col >= grid[row].length || // Out of right boundary
			grid[row][col] === '0' // Water or already visited
		) {
			return
		}

		// Mark the cell as visited by setting it to '0'
		grid[row][col] = '0'

		// Visit all 4 adjacent cells
		dfs(grid, row + 1, col) // down
		dfs(grid, row - 1, col) // up
		dfs(grid, row, col + 1) // right
		dfs(grid, row, col - 1) // left
	}

	for (let row = 0; row < grid.length; row++) {
		for (let col = 0; col < grid[row].length; col++) {
			if (grid[row][col] === '1') {
				count++
				dfs(grid, row, col)
			}
		}
	}

	return {
		count,
		grid,
	}
}

console.log(
	numIslands([
		['1', '1', '1', '1', '0'],
		['1', '1', '0', '1', '0'],
		['1', '1', '0', '0', '1'],
		['0', '0', '0', '0', '1'],
	])
) // Output: { count: 2, grid: [...] }
