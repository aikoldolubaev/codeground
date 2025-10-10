// Leetcode 53. Maximum Subarray
// https://leetcode.com/problems/maximum-subarray/description/
// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
// A subarray is a contiguous part of an array.

// find the biggest sum of the contiguous subset of elements of the array
/* BRUTE FORCE */
const maxContiguousSum = (arr, num) => {
	let max = 0
	// arr.length-num+1 to avoid out of bounds
	for (let i = 0; i < arr.length - num + 1; i++) {
		let temp = 0
		// For loop to sum the numbers
		for (let j = 0; j < num; j++) {
			// i+j to move the window
			temp += arr[i + j]
		}
		if (temp > max) {
			max = temp
		}
	}
	return max
}
console.log(maxContiguousSum([1, 6, 5, 2, 5, 3, 10], 2)) // 3+10=11

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* Sliding Window */
const subsetWithSlidingWindow = (arr, num) => {
	let max = 0
	let temp = 0
	for (let i = 0; i < num; i++) {
		max += arr[i]
	}
	temp = max
	for (let i = num; i < arr.length; i++) {
		temp = temp - arr[i - num] + arr[i] //current - prev + next
		if (max < temp) {
			max = temp
		}
	}
	return max
}
console.log(subsetWithSlidingWindow([1, 6, 5, 2, 5, 3, 10], 2)) //11
