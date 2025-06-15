// No memo
function fibonacci(num) {
	if (num <= 2) return 1
	return fibonacci(num - 1) + fibonacci(num - 2)
}
console.log(fibonacci(6)) //8

// Memoized
// - Memoization is a top-down approach. It solves the problem recursively and stores the results of subproblems to avoid redundant calculations.
function fibonacci(num, memo = []) {
	if (memo[num]) return memo[num]
	if (num <= 2) return 1
	return fibonacci(num - 1, memo) + fibonacci(num - 2, memo)
}
console.log(fibonacci(6)) //8

// Tabulation
// Tabulation is a bottom-up approach. It solves all related subproblems first, typically using iteration, and builds up the solution in a table (usually an array).
function fibonacciTabulation(n) {
	const table = [0, 1, 1]
	for (let i = 3; i <= n; i++) {
		table[i] = table[i - 1] + table[i - 2]
	}
	return table[n]
}
console.log(fibonacciTabulation(6)) //8

/* 
Both techniques cache results to avoid redundant calculations, but memoization is recursive and on-demand, while tabulation is iterative and builds up all results in advance.
*/
