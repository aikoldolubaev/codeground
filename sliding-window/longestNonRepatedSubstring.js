const substringLength = (str) => {
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
		max = Math.max(max, right - left + 1) // Sliding window, "+1" because we're using indexes
	}
	return max
}
console.log(substringLength('abaabcdbc')) // 4
//                              ^  ^
console.log(substringLength('ccccccccccc')) // 1
//                           ^^
console.log(substringLength('aikol')) // 5
//                           ^   ^
