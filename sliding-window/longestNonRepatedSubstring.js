const substringLength = (str) => {
	const hash = {}
	let left = 0
	let max = 0
	for (let right = 0; right < str.length; right++) {
		let currentChar = str[right]
		if (hash[currentChar] >= left) {
			left = hash[currentChar] + 1 // adding 1 because of index
		}
		hash[currentChar] = right
		max = Math.max(max, right - left + 1) // sliding window
	}
	return max
}
console.log(substringLength('abaabcdbc')) // 4
//                              ^  ^
console.log(substringLength('ccccccccccc')) // 1
//                           ^^
console.log(substringLength('aikol')) // 5
//                           ^   ^
