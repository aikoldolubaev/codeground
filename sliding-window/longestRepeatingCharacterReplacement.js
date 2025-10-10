// LeetCode 424 — Longest Repeating Character Replacement
// https://leetcode.com/problems/longest-repeating-character-replacement/

function characterReplacement(chars, allowedChanges) {
	const characterCount = new Array(26).fill(0)
	let left = 0
	let maxFreq = 0
	let longestSubstring = 0

	for (let right = 0; right < chars.length; right++) {
		const charIndex = chars.charCodeAt(right) - 65 // 'A' -> 0
		characterCount[charIndex]++
		maxFreq = Math.max(maxFreq, characterCount[charIndex])

		// keep window valid: changes needed = windowSize - maxFreq
		// Sliding window size is right - left + 1
		while (right - left + 1 - maxFreq > allowedChanges) {
			const l = chars.charCodeAt(left) - 65
			characterCount[l]--
			left++
		}
		longestSubstring = Math.max(longestSubstring, right - left + 1)
	}
	return longestSubstring
}

console.log(characterReplacement('AABABBA', 1)) // 4
console.log(characterReplacement('ABAB', 2)) // 4
console.log(characterReplacement('BAAA', 0)) // 3
console.log(characterReplacement('AAAA', 2)) // 4
console.log(characterReplacement('ABCDE', 1)) // 2
console.log(characterReplacement('AABBB', 2)) // 5
console.log(characterReplacement('ABBB', 2)) // 4
console.log(characterReplacement('AABA', 0)) // 2
console.log(characterReplacement('A', 0)) // 1
console.log(characterReplacement('A', 1)) // 1
console.log(characterReplacement('ABBB', 2)) // 4
console.log(characterReplacement('ABAA', 0)) // 2
console.log(characterReplacement('ABAA', 1)) // 3
console.log(characterReplacement('ABAA', 2)) // 4
console.log(characterReplacement('AABABBA', 1)) // 4
