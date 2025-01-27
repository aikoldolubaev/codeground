function countIslands(grid) {
    let count = 0;

    // Loop through each cell in the grid
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            // Check if the current cell is part of an island ('1')
            if (grid[row][col] === '1') {
                const stack = [[row, col]]; // Initialize stack with the current cell

                // Perform iterative DFS using the stack
                while (stack.length > 0) {
                    const [currentRow, currentCol] = stack.pop();

                    // Ensure the cell is within bounds and unvisited land
                    if (
                        currentRow >= 0 && currentRow < grid.length && // Check row boundaries
                        currentCol >= 0 && currentCol < grid[0].length && // Check column boundaries
                        grid[currentRow][currentCol] === '1' // Check if land
                    ) {
                        grid[currentRow][currentCol] = '0'; // Mark as visited

                        // Add all adjacent cells to the stack
                        stack.push([currentRow + 1, currentCol]); // Down
                        stack.push([currentRow - 1, currentCol]); // Up
                        stack.push([currentRow, currentCol + 1]); // Right
                        stack.push([currentRow, currentCol - 1]); // Left
                    }
                }

                count++; // Increment the island count after fully exploring one
            }
        }
    }

    return {
        count,
        grid, // Return the modified grid
    };
}

console.log(
    countIslands([
        ['1', '1', '1', '1', '0'],
        ['1', '1', '0', '1', '0'],
        ['1', '1', '0', '0', '0'],
        ['0', '0', '0', '0', '0'],
    ])
); // Output: { count: 1, grid: [...] }


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
