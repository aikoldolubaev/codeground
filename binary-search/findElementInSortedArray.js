// Binary Search - Find Element in Sorted Array
// Time Complexity: O(log n)
// Space Complexity: O(1)

function binarySearch(arr, target) {
	let left = 0
	let right = arr.length - 1

	while (left <= right) {
		const mid = Math.floor((left + right) / 2)
		const midValue = arr[mid]

		if (midValue === target) {
			return mid // Found
		} else if (midValue < target) {
			left = mid + 1 // Search right half
		} else {
			right = mid - 1 // Search left half
		}
	}

	return -1 // Not found
}

// Examples
console.log(binarySearch([1, 3, 5, 7, 9, 11], 7)) // 3
console.log(binarySearch([1, 3, 5, 7, 9, 11], 5)) // 2
console.log(binarySearch([1, 3, 5, 7, 9, 11], 1)) // 0
console.log(binarySearch([1, 3, 5, 7, 9, 11], 13)) // -1
console.log(binarySearch([2, 5, 8, 12, 16, 23, 38, 45, 56, 67, 78], 23)) // 5
