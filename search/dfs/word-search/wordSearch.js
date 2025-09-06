/*
 * LeetCode 79. Word Search
 * https://leetcode.com/problems/word-search/description/
 */

const wordSearch = (board, word) => {
	const dfs = (row, col, wordIndex) => {
		if (wordIndex === word.length) return true // Word found
		if (
			row < 0 || // Top boundary
			row >= board.length || // Bottom boundary
			col < 0 || // Left boundary
			col >= board[0].length || // Right boundary
			board[row][col] === '#' || // Already visited
			board[row][col] !== word[wordIndex] // Character mismatch
		)
			return false

		const temp = board[row][col] // Store current cell to restore later
		board[row][col] = '#' // Mark as visited

		const found =
			dfs(row + 1, col, wordIndex + 1) || // Down
			dfs(row - 1, col, wordIndex + 1) || // Up
			dfs(row, col + 1, wordIndex + 1) || // Right
			dfs(row, col - 1, wordIndex + 1) // Left

		board[row][col] = temp // Restore cell

		return found
	}

	for (let row = 0; row < board.length; row++) {
		for (let col = 0; col < board[0].length; col++) {
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
