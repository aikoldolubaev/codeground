function solveSudoku(board) {
	const isValid = (r, c, ch) => {
		const blockRow = 3 * Math.floor(r / 3)
		const blockCol = 3 * Math.floor(c / 3)
		for (let i = 0; i < 9; i++) {
			if (board[r][i] === ch) return false
			if (board[i][c] === ch) return false
			const rr = blockRow + Math.floor(i / 3),
				cc = blockCol + (i % 3)
			if (board[rr][cc] === ch) return false
		}
		return true
	}

	const backtrack = () => {
		for (let r = 0; r < 9; r++) {
			for (let c = 0; c < 9; c++) {
				if (board[r][c] === '.') {
					for (let ch = '1'; ch <= '9'; ch = String.fromCharCode(ch.charCodeAt(0) + 1)) {
						if (isValid(r, c, ch)) {
							board[r][c] = ch
							if (backtrack()) return true
							board[r][c] = '.'
						}
					}
					return false // none fit here → backtrack
				}
			}
		}
		return true // full board solved
	}

	backtrack()
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

solveSudoku(board)
console.log('🚀🚗🍰🐣🚧🎸🌳 ~ result:', JSON.stringify(board))
/*
[
	(['5', '3', '4', '6', '7', '8', '9', '1', '2'],
	['6', '7', '2', '1', '9', '5', '3', '4', '8'],
	['1', '9', '8', '3', '4', '2', '5', '6', '7'],
	['8', '5', '9', '7', '6', '1', '4', '2', '3'],
	['4', '2', '6', '8', '5', '3', '7', '9', '1'],
	['7', '1', '3', '9', '2', '4', '8', '5', '6'],
	['9', '6', '1', '5', '3', '7', '2', '8', '4'],
	['2', '8', '7', '4', '1', '9', '6', '3', '5'],
	['3', '4', '5', '2', '8', '6', '1', '7', '9'])
]
*/
