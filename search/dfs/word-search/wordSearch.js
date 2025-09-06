/*
 * LeetCode 79. Word Search
 * https://leetcode.com/problems/word-search/description/
 */

const wordSearch = (board, word) => {
	const dfs = (row, col, wordIndex) => {
		if (wordIndex === word.length) return true // Word found
		if (row < 0 || col < 0 || row >= board.length || col >= board[0].length || board[row][col] !== word[wordIndex])
			return false

		const temp = board[row][col]
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
console.log(wordSearch(board1, 'SEE')) // true
console.log(wordSearch(board1, 'ABCB')) // false

// const board2 = [
// 	['C', 'A', 'A'],
// 	['A', 'A', 'A'],
// 	['B', 'C', 'D'],
// ]
// console.log(wordSearch(board2, 'AAB')) // true
// console.log(wordSearch(board2, 'CAA')) // true
// console.log(wordSearch(board2, 'CAD')) // false
