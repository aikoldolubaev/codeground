function maxArea(nums) {
	let left = 0
	let right = nums.length - 1
	let maxWater = 0

	while (left < right) {
		let minHeight = Math.min(nums[left], nums[right])
		let width = right - left
		maxWater = Math.max(maxWater, minHeight * width)

		if (nums[left] < nums[right]) {
			left++
		} else {
			right--
		}
	}

	return maxWater
}

//                       index   element
// Example usage: area = width * height
console.log(maxArea([12, 4, 4, 5])) // Output: 3*5=15

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])) // Output: 49
console.log(maxArea([3, 6, 8, 2, 5])) // Output: 15

console.log(maxArea([2, 8, 3, 2, 7])) // Output: 21

console.log(maxArea([5, 1, 6, 8, 9])) // Output: 20

console.log(maxArea([6, 9, 2, 2, 8])) // Output: 24

console.log(maxArea([5, 3, 8, 6, 2])) // Output:15

console.log(maxArea([6, 3, 2, 8, 4])) // Output:18

console.log(maxArea([3, 4, 7, 9, 4])) // Output: 12

console.log(maxArea([8, 7, 2, 3, 1])) // Output: 9

console.log(maxArea([6, 7, 2, 5, 1])) // Output: 15

console.log(maxArea([7, 3, 5, 2, 1])) // Output: 10
