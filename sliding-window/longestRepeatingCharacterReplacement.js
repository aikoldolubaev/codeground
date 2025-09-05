// LeetCode 424 — Longest Repeating Character Replacement
// https://leetcode.com/problems/longest-repeating-character-replacement/

function characterReplacement(s, k) {
	const cnt = new Array(26).fill(0)
	let left = 0,
		maxFreq = 0,
		best = 0

	for (let right = 0; right < s.length; right++) {
		const r = s.charCodeAt(right) - 65 // 'A' -> 0
		cnt[r]++
		maxFreq = Math.max(maxFreq, cnt[r])

		// keep window valid: changes needed = windowSize - maxFreq
		while (right - left + 1 - maxFreq > k) {
			const l = s.charCodeAt(left) - 65
			cnt[l]--
			left++
		}
		best = Math.max(best, right - left + 1)
	}
	return best
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
