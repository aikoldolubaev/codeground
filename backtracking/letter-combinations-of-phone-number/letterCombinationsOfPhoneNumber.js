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

console.log(phoneCombinations('23'))

// Refactored version of the code for better readability and maintainability
const letterOfPhoneCombinations = (digits) => {
	const combinations = []
	const path = []

	const backtrack = (index) => {
		if (path.length === digits.length) {
			combinations.push(path.join(''))
			return
		}

		const letters = phone[digits[index]]
		for (let i = 0; i < letters.length; i++) {
			path.push(letters[i]) // make a choice
			backtrack(index + 1) // explore
			path.pop() // undo the choice (backtrack)
		}
	}

	backtrack(0)
	return combinations
}

console.log(letterOfPhoneCombinations('23'))
