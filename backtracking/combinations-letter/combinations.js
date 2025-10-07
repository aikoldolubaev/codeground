/*
Leetcode: https://leetcode.com/problems/letter-combinations-of-a-phone-number/description/

    input: "23",
    output: [
        'ad', 'ae', 'af',
        'bd', 'be', 'bf',
        'cd', 'ce', 'cf'
    ]
*/

const phone = {
	2: 'abc',
	3: 'def',
	4: 'ghi',
	5: 'jkl',
	6: 'mno',
	7: 'pqrs',
	8: 'tuv',
	9: 'wxyz',
}

const phoneCombinations = (nums) => {
	const combinations = []

	const backtrack = (answers, nums, combination, idx) => {
		// Base case
		if (combination.length === nums.length) {
			answers.push(combination)
			return
		}

		const num = nums[idx]
		const chars = phone[num]

		for (let i = 0; i < chars.length; i++) {
			backtrack(answers, nums, combination + chars[i], idx + 1)
		}
	}

	backtrack(combinations, nums, '', 0)

	return combinations
}

console.log(phoneCombinations('2')) // ['a','b','c']
