/**
 * LeetCode 54. Spiral Matrix
 * https://leetcode.com/problems/spiral-matrix/description/
 * Given an m x n matrix, return all elements of the matrix in spiral order.
 * @param {number[][]} matrix
 * @return {number[]}
 */

var spiralOrder = function (matrix) {
	const spirals = []

	let top = 0
	let bottom = matrix.length - 1
	let left = 0
	let right = matrix[0].length - 1

	while (top <= bottom && left <= right) {
		// go right: left to right
		for (let i = left; i <= right; i++) spirals.push(matrix[top][i]) // top(^) is fixed
		top++

		// go down: top to bottom
		for (let i = top; i <= bottom; i++) spirals.push(matrix[i][right]) // right(->) is fixed
		right--

		// go left: right to left
		for (let i = right; i >= left; i--) spirals.push(matrix[bottom][i]) // bottom(_) is fixed
		bottom--

		// go up: bottom to top
		for (let i = bottom; i >= top; i--) spirals.push(matrix[i][left]) // left(<-) is fixed
		left++
	}
	return spirals
}
const matrix1 = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
]
console.log(spiralOrder(matrix1)) // [1,2,3,6,9,8,7,4,5]
