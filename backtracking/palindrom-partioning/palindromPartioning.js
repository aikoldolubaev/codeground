// Palindrome Partitioning — backtracking + two-pointer palindrome check
// https://leetcode.com/problems/palindrome-partitioning/
function partition(inputString) {
	const palindromePartitions = []
	const segment = []
	const inputStringLength = inputString.length

	function isPalindrome(str, left, right) {
		while (left < right) {
			if (str[left] !== str[right]) return false
			left++
			right--
		}
		return true
	}

	function dfs(partitionIndex) {
		if (partitionIndex === inputStringLength) {
			// used all chars → one valid cut
			palindromePartitions.push(segment.slice())
			return
		}
		for (let j = partitionIndex; j < inputStringLength; j++) {
			if (isPalindrome(inputString, partitionIndex, j)) {
				// s[i..j] is palindrome?
				segment.push(inputString.slice(partitionIndex, j + 1)) // choose
				dfs(j + 1) // explore
				segment.pop() // undo
			}
		}
	}

	dfs(0)
	return palindromePartitions
}

// Quick tests
console.log(partition('aab')) // [["a","a","b"], ["aa","b"]]
console.log(partition('abba')) // [["a","b","b","a"], ["a","bb","a"], ["abba"]]
