const sortNaively = (nums) => {
	for (let i = 0; i < nums.length; i++) {
		for (let j = i + 1; j < nums.length; j++) {
			if (nums[i] > nums[j]) {
				// Swap
				;[nums[i], nums[j]] = [nums[j], nums[i]]
			}
		}
	}
	console.log(nums) // [ 1, 1, 2, 3, 4, 9 ]
}

sortNaively([1, 2, 4, 1, 9, 3])

const sortNaively2 = (nums) => {
	for (let i = 0; i < nums.length; i++) {
		for (let j = i + 1; j < nums.length; j++) {
			if (nums[i] > nums[j]) {
				// Swap
				let temp = nums[i]
				nums[i] = nums[j]
				nums[j] = temp
			}
		}
	}
	console.log(nums) // [ 1, 1, 2, 3, 4, 9 ]
}

sortNaively2([1, 2, 4, 1, 9, 3])
