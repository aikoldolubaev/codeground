function generateParenthesis(amount) {
	const result = []

	function backtrack(current, open, close) {
		if (current.length === amount * 2) {
			result.push(current)
			return
		}

		if (open < amount) {
			backtrack(current + '(', open + 1, close)
		}

		if (close < open) {
			backtrack(current + ')', open, close + 1)
		}
	}

	backtrack('', 0, 0)
	return result
}

console.log(generateParenthesis(3)) // ["((()))","(()())","(())()","()(())","()()()"] = 5 combinations
console.log(generateParenthesis(2)) // ["(())","()()"]  // = 2 combinations
console.log(generateParenthesis(1)) // ["()"] // = 1 combination
