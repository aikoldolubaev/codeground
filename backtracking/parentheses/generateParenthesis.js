// Leetcode: https://leetcode.com/problems/generate-parentheses/description/

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

console.log(generateParenthesis(1)) // ["()"] // = 1 combination
console.log(generateParenthesis(3)) // ["((()))","(()())","(())()","()(())","()()()"] = 5 combinations
console.log(generateParenthesis(2)) // ["(())","()()"]  // = 2 combinations

/*
1.  backtrack('', 0, 0)
2.  backtrack('(', 1, 0)
3.  backtrack('((', 2, 0)
4.  backtrack('(((', 3, 0)
5.  backtrack('((()', 3, 1)
6.  backtrack('((())', 3, 2)
7.  backtrack('((()))', 3, 3) → result.push('((()))')
8.  backtrack('(()', 2, 1)
9.  backtrack('(()(', 3, 1)
10. backtrack('(()()', 3, 2)
11. backtrack('(()())', 3, 3) → result.push('(())')
12. backtrack('(())', 2, 2)
13. backtrack('(())(', 3, 2)
14. backtrack('(())()', 3, 3) → result.push('()()')
15. backtrack('()', 1, 0)
16. backtrack('()(', 2, 0)
17. backtrack('()((', 3, 0)
18. backtrack('()(()', 3, 1)
19. backtrack('()(()(', 3, 2)
20. backtrack('()(()()', 3, 3) → result.push('()(())')
21. backtrack('()()', 2, 2)
22. backtrack('()()(', 3, 2)
23. backtrack('()()()', 3, 3) → result.push('()()()')
24. backtrack('', 0, 0) → end of recursion
25. return result = ["((()))","(()())","(())()","()(())","()()()"]
*/
