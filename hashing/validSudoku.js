// https://leetcode.com/problems/valid-sudoku/description/

function isValidSudoku(board) {
	const rows = Array.from({ length: 9 }, () => new Set())
	const cols = Array.from({ length: 9 }, () => new Set())
	const boxes = Array.from({ length: 9 }, () => new Set()) // 3x3 subgrids

	for (let r = 0; r < 9; r++) {
		for (let c = 0; c < 9; c++) {
			const ch = board[r][c]
			if (ch === '.') continue

			const b = Math.floor(r / 3) * 3 + Math.floor(c / 3) // box index 0..8

			if (rows[r].has(ch) || cols[c].has(ch) || boxes[b].has(ch)) return false

			rows[r].add(ch)
			cols[c].add(ch)
			boxes[b].add(ch)
		}
	}
	return true
}

const board = [
	['5', '3', '.', '.', '7', '.', '.', '.', '.'],
	['6', '.', '.', '1', '9', '5', '.', '.', '.'],
	['.', '9', '8', '.', '.', '.', '.', '6', '.'],
	['8', '.', '.', '.', '6', '.', '.', '.', '3'],
	['4', '.', '.', '8', '.', '3', '.', '.', '1'],
	['7', '.', '.', '.', '2', '.', '.', '.', '6'],
	['.', '6', '.', '.', '.', '.', '2', '8', '.'],
	['.', '.', '.', '4', '1', '9', '.', '.', '5'],
	['.', '.', '.', '.', '8', '.', '.', '7', '9'],
]
console.log('❤️', isValidSudoku(board)) // true
