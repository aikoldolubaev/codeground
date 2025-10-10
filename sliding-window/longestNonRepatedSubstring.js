// Leetcode 3. Longest Substring Without Repeating Characters
// https://leetcode.com/problems/longest-substring-without-repeating-characters/description/

const findLongestUniqueSubstring = (str) => {
	const hash = {}
	let left = 0
	let max = 0
	for (let right = 0; right < str.length; right++) {
		let currentChar = str[right]
		// if the character is already in the hash and its index is within the current window
		if (hash[currentChar] >= left) {
			// If the character is already in the hash, move the left pointer to the right of the last occurrence
			left = hash[currentChar] + 1
		}
		hash[currentChar] = right
		max = Math.max(max, right - left + 1) // Sliding window, length=(right−left)+1
	}
	return max
}

console.log(findLongestUniqueSubstring('aia')) // 2 => 'ai'
console.log(findLongestUniqueSubstring('abaabcdbc')) // 4b => 'abcd'
console.log(findLongestUniqueSubstring('ccccccccccc')) // 1 => 'c'
console.log(findLongestUniqueSubstring('aikol')) // 5 => 'aikol'
