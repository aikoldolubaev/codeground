/* 
Leetcode: https://leetcode.com/problems/n-queens

*/

function solveNQueens(boardSize) {
	const solutions = []
	const chessBoard = Array.from({ length: boardSize }, () => Array(boardSize).fill('.'))

	const columns = new Set()
	const positiveDiagonals = new Set() // row + col
	const negativeDiagonals = new Set() // row - col

	function backtrack(row) {
		if (row === boardSize) {
			const boardSnapshot = chessBoard.map((rowArray) => rowArray.join(''))
			solutions.push(boardSnapshot)
			return
		}

		for (let col = 0; col < boardSize; col++) {
			const posDiag = row + col
			const negDiag = row - col
			if (columns.has(col) || positiveDiagonals.has(posDiag) || negativeDiagonals.has(negDiag)) {
				continue
			}

			columns.add(col)
			positiveDiagonals.add(posDiag)
			negativeDiagonals.add(negDiag)
			chessBoard[row][col] = 'Q'

			backtrack(row + 1)

			columns.delete(col)
			positiveDiagonals.delete(posDiag)
			negativeDiagonals.delete(negDiag)
			chessBoard[row][col] = '.'
		}
	}

	backtrack(0)
	return solutions
}

console.log(JSON.stringify(solveNQueens(4))) // 4 is for the board size and the number of queens

/* 

[
    [
        " . | Q | . | . |",

        " . | . | . | Q |",

        " Q | . | . | . |",

        " . | . | Q | . |"
    ],
    [
        " . | . | Q | . |",

        " Q | . | . | . |",

        " . | . | . | Q |",

        " . | Q | . | . |"
    ]
]

*/

console.log(JSON.stringify(solveNQueens(5)))
/* 
[
	['Q....', '..Q..', '....Q', '.Q...', '...Q.'],
	['Q....', '...Q.', '.Q...', '....Q', '..Q..'],
	['.Q...', '...Q.', 'Q....', '..Q..', '....Q'],
	['.Q...', '....Q', '..Q..', 'Q....', '...Q.'],
	['..Q..', 'Q....', '...Q.', '.Q...', '....Q'],
	['..Q..', '....Q', '.Q...', '...Q.', 'Q....'],
	['...Q.', 'Q....', '..Q..', '....Q', '.Q...'],
	['...Q.', '.Q...', '....Q', '..Q..', 'Q....'],
	['....Q', '.Q...', '...Q.', 'Q....', '..Q..'],
	['....Q', '..Q..', 'Q....', '...Q.', '.Q...']
]

*/

console.log(JSON.stringify(solveNQueens(1)))

/*
[["Q"]]
*/
