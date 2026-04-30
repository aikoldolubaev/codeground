// Binary Search - Find Left Boundary (First Occurrence)
// Time Complexity: O(log n)
// Space Complexity: O(1)

function searchLeftBoundary(arr, target) {
	let left = 0
	let right = arr.length - 1
	let result = -1

	while (left <= right) {
		const mid = Math.floor((left + right) / 2)

		if (arr[mid] === target) {
			result = mid
			right = mid - 1 // Continue searching left
		} else if (arr[mid] < target) {
			left = mid + 1
		} else {
			right = mid - 1
		}
	}

	return result
}

// Find Right Boundary (Last Occurrence)
function searchRightBoundary(arr, target) {
	let left = 0
	let right = arr.length - 1
	let result = -1

	while (left <= right) {
		const mid = Math.floor((left + right) / 2)

		if (arr[mid] === target) {
			result = mid
			left = mid + 1 // Continue searching right
		} else if (arr[mid] < target) {
			left = mid + 1
		} else {
			right = mid - 1
		}
	}

	return result
}

// Find Minimum in Rotated Sorted Array
function findMin(arr) {
	let left = 0
	let right = arr.length - 1

	while (left < right) {
		const mid = Math.floor((left + right) / 2)

		// If mid is greater than right, min is in right half
		if (arr[mid] > arr[right]) {
			left = mid + 1
		} else {
			// Min is in left half or at mid
			right = mid
		}
	}

	return arr[left]
}

// Examples
console.log(searchLeftBoundary([1, 3, 3, 3, 5, 7], 3)) // 1 (first occurrence of 3)
console.log(searchRightBoundary([1, 3, 3, 3, 5, 7], 3)) // 3 (last occurrence of 3)
console.log(searchLeftBoundary([1, 2, 3, 4, 5], 2)) // 1
console.log(searchRightBoundary([1, 2, 3, 4, 5], 2)) // 1

console.log(findMin([3, 4, 5, 1, 2])) // 1
console.log(findMin([4, 5, 6, 7, 0, 1, 2])) // 0
