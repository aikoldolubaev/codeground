const threeSum = (nums) => {
	nums.sort((a, b) => a - b) // Sort the array
	const result = []

	for (let i = 0; i < nums.length - 2; i++) {
		if (i > 0 && nums[i] === nums[i - 1]) continue // Skip duplicates

		let left = i + 1
		let right = nums.length - 1

		while (left < right) {
			const sum = nums[i] + nums[left] + nums[right]

			if (sum < 0) {
				left++
			} else if (sum > 0) {
				right--
			} else {
				result.push([nums[i], nums[left], nums[right]])
				// Skip duplicates
				while (left < right && nums[left] === nums[left + 1]) left++
				while (left < right && nums[right] === nums[right - 1]) right--
				left++
				right--
			}
		}
	}

	return result
}

// Example usage:
console.log(threeSum([-1, 0, 1, 2, -1, -4])) // Output: [[-1, -1, 2], [-1, 0, 1]]
console.log(threeSum([-4, -1, -1, 0, 1, 2])) // Output: [[-4, 1, 2], [-1, -1, 2], [-1, 0, 1]]
console.log(threeSum([0, 0, 0, 0])) // Output: [[0, 0, 0]]
console.log(threeSum([1, 2, -2, -1])) // Output: []
console.log(threeSum([-2, 0, 1, 1, 2])) // Output: [[-2, 1, 1], [-2, 0, 2]]
console.log(threeSum([-1, 0, 1, 2, -1, -4, 3])) // Output: [[-1, -1, 2], [-1, 0, 1], [-1, 2, 3]]
console.log(threeSum([3, 0, -4, 1, -1, 2])) // Output: [[-4, 1, 3], [-1, 0, 1]]
console.log(threeSum([0, 1, 2])) // Output: []
console.log(threeSum([-1, -1, 2, 2, 0])) // Output: [[-1, -1, 2], [-1, 0, 1]]
