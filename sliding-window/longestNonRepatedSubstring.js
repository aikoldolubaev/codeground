//Find the longest substring length
//input: 'abaabcdbc'; output: 4 =>'abcd'.length
//input: 'ccccccccccc' output: 1 =>'c'.length
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
substringLength('abaabcdbc') //4
//substringLength('ccccccccccc');//4
