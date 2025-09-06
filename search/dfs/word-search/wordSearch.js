/*
 * LeetCode 79. Word Search
 * https://leetcode.com/problems/word-search/description/
 */

const wordSearch = (grid, word) => {
	const dfs = (row, col, wordIndex) => {
		if (wordIndex === word.length) return true // Word found
		if (
			row < 0 || // Top boundary
			row >= grid.length || // Bottom boundary
			col < 0 || // Left boundary
			col >= grid[0].length || // Right boundary
			grid[row][col] === '#' || // Already visited
			grid[row][col] !== word[wordIndex] // Character mismatch
		)
			return false

		const temp = grid[row][col] // Store current cell to restore later
		grid[row][col] = '#' // Mark as visited

		const found =
			dfs(row + 1, col, wordIndex + 1) || // Down
			dfs(row - 1, col, wordIndex + 1) || // Up
			dfs(row, col + 1, wordIndex + 1) || // Right
			dfs(row, col - 1, wordIndex + 1) // Left

		grid[row][col] = temp // Restore cell

		return found
	}

	for (let row = 0; row < grid.length; row++) {
		for (let col = 0; col < grid[0].length; col++) {
			if (dfs(row, col, 0)) return true
		}
	}

	return false
}

const board1 = [
	['A', 'B', 'C', 'E'],
	['S', 'F', 'C', 'S'],
	['A', 'D', 'E', 'E'],
]
console.log(wordSearch(board1, 'ABCCED')) // true
console.log(wordSearch(board1, 'ABCF')) // false
