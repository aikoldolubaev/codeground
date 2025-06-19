/* Leetcode: 
    https://leetcode.com/problems/is-subsequence/description/?envType=study-plan-v2&envId=top-interview-150 
*/

const isSubsequence = (subsequent, target) => {
	let subIndex = 0
	let targetIndex = 0

	while (subIndex < subsequent.length && targetIndex < target.length) {
		if (subsequent[subIndex] === target[targetIndex]) {
			subIndex++
		}
		targetIndex++
	}

	return subIndex === subsequent.length
}

console.log(isSubsequence('abc', 'ahbgdc')) // true
console.log(isSubsequence('axc', 'ahbgdc')) // false
