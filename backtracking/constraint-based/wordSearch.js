const wordSearch = (board, word) => {
	const rows = board.length
	const cols = board[0].length

	const dfs = (r, c, i) => {
		if (i === word.length) return true // Word found
		if (r < 0 || c < 0 || r >= rows || c >= cols || board[r][c] !== word[i]) return false

		const temp = board[r][c]
		board[r][c] = '#' // Mark as visited

		const found = dfs(r + 1, c, i + 1) || dfs(r - 1, c, i + 1) || dfs(r, c + 1, i + 1) || dfs(r, c - 1, i + 1)

		board[r][c] = temp // Restore cell

		return found
	}

	for (let r = 0; r < rows; r++) {
		for (let c = 0; c < cols; c++) {
			if (dfs(r, c, 0)) return true
		}
	}

	return false
}

// Test Cases

const board1 = [
	['A', 'B', 'C', 'E'],
	['S', 'F', 'C', 'S'],
	['A', 'D', 'E', 'E'],
]
console.log(wordSearch(board1, 'ABCCED')) // true
console.log(wordSearch(board1, 'SEE')) // true
console.log(wordSearch(board1, 'ABCB')) // false

const board2 = [
	['C', 'A', 'A'],
	['A', 'A', 'A'],
	['B', 'C', 'D'],
]
console.log(wordSearch(board2, 'AAB')) // true
console.log(wordSearch(board2, 'CAA')) // true
console.log(wordSearch(board2, 'CAD')) // false
