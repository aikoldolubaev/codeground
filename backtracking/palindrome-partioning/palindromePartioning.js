// Palindrome Partitioning — backtracking + two-pointer palindrome check
// https://leetcode.com/problems/palindrome-partitioning/

function checkPalindrome(str, left, right) {
	while (left < right) {
		if (str[left] !== str[right]) return false
		left++
		right--
	}
	return true
}

function palindromePartition(options) {
	const partitions = []
	const segment = []

	function backtrack(index) {
		if (index === options.length) {
			partitions.push(segment.slice())
			return
		}
		for (let j = index; j < options.length; j++) {
			if (checkPalindrome(options, index, j)) {
				segment.push(options.slice(index, j + 1))
				backtrack(j + 1)
				segment.pop() // backtrack
			}
		}
	}

	backtrack(0)
	return partitions
}

// Quick tests
console.log(palindromePartition('ab')) // [["a","b"]]

// console.log(palindromePartition('aab')) // [["a","a","b"], ["aa","b"]]
// console.log(palindromePartition('abba')) // [["a","b","b","a"], ["a","bb","a"], ["abba"]]
