function numberOfIslands(grid) {
	let count = 0

	for (let row = 0; row < grid.length; row++) {
		for (let col = 0; col < grid[0].length; col++) {
			if (grid[row][col] === '1') {
				count++
				const stack = [[row, col]] // Initialize stack with the current cell

				// Perform iterative DFS using the stack
				while (stack.length > 0) {
					const [currentRow, currentCol] = stack.pop()

					// Ensure the cell is within bounds and unvisited land
					if (
						currentRow >= 0 && // top boundary
						currentRow < grid.length && // bottom boundary
						currentCol >= 0 && // left boundary
						currentCol < grid[0].length && // right boundary
						grid[currentRow][currentCol] === '1' // land
					) {
						grid[currentRow][currentCol] = '0' // Mark as visited

						// Add all adjacent cells to the stack
						stack.push([currentRow + 1, currentCol]) // Down
						stack.push([currentRow - 1, currentCol]) // Up
						stack.push([currentRow, currentCol + 1]) // Right
						stack.push([currentRow, currentCol - 1]) // Left
					}
				}
			}
		}
	}

	return {
		count,
		grid, // Return the modified grid
	}
}

console.log(
	numberOfIslands([
		['1', '1', '1', '1', '0'],
		['1', '1', '0', '1', '0'],
		['1', '1', '0', '0', '0'],
		['0', '0', '0', '0', '0'],
	])
) // Output: { count: 1, grid: [...] }
