var spiralOrder = function (matrix) {
	const spirals = []

	let top = 0
	let bottom = matrix.length - 1
	let left = 0
	let right = matrix[0].length - 1
	let dir = 'right'
	while (top <= bottom && left <= right) {
		if (dir == 'right') {
			for (let i = left; i <= right; i++) {
				spirals.push(matrix[top][i])
			}
			top++
			dir = 'down'
		} else if (dir == 'down') {
			for (let i = top; i <= bottom; i++) {
				spirals.push(matrix[i][right])
			}
			right--
			dir = 'left'
		} else if (dir === 'left') {
			for (let i = right; i >= left; i--) {
				spirals.push(matrix[bottom][i])
			}
			bottom--
			dir = 'up'
		} else if (dir == 'up') {
			for (let i = bottom; i >= top; i--) {
				spirals.push(matrix[i][left])
			}
			left++
			dir = 'right'
		}
	}
	return spirals
}
