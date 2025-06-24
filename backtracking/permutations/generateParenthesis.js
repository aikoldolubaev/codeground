function generateParenthesis(amount) {
	const result = []

	function backtrack(current, open, close) {
		// If the current string is complete
		if (current.length === amount * 2) {
			// why n * 2? Because we need n open and n close parentheses
			// Push a shallow copy of `current` to avoid storing the reference.
			result.push(current)
			return
		}

		// If we can still add an open parenthesis
		if (open < amount) {
			// why open < n? Because we can only add n open parentheses
			backtrack(current + '(', open + 1, close)
		}

		// If we can add a close parenthesis
		if (close < open) {
			// why close < open? Because we can only add a close parenthesis if there is an unmatched open parenthesis
			// This ensures that we never have more close parentheses than open ones
			backtrack(current + ')', open, close + 1)
		}
	}

	backtrack('', 0, 0)
	return result
}

console.log(generateParenthesis(3)) // ["((()))","(()())","(())()","()(())","()()()"] = 5 combinations
console.log(generateParenthesis(2)) // ["(())","()()"]  // = 2 combinations
console.log(generateParenthesis(1)) // ["()"] // = 1 combination
