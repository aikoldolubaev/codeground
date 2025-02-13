const numIslands = (grid) => {
	if (!grid || grid.length === 0) return 0

	let count = 0

	const dfs = (grid, i, j) => {
		// Base case
		if (
			i < 0 || // Out of top boundary
			i >= grid.length || // Out of bottom boundary
			j < 0 || // Out of left boundary
			j >= grid[i].length || // Out of right boundary
			grid[i][j] === '0' // Water or already visited
		) {
			return
		}

		// Mark the cell as visited by setting it to '0'
		grid[i][j] = '0'

		// Visit all 4 adjacent cells
		dfs(grid, i + 1, j) // down
		dfs(grid, i - 1, j) // up
		dfs(grid, i, j + 1) // right
		dfs(grid, i, j - 1) // left
	}

	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid[i].length; j++) {
			if (grid[i][j] === '1') {
				count++
				dfs(grid, i, j)
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
