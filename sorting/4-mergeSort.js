/***** Divide & Conquer pattern ******/

function mergeSort(arr) {
	if (arr.length <= 1) return arr // Base case

	const mid = Math.floor(arr.length / 2)
	const left = mergeSort(arr.slice(0, mid))
	const right = mergeSort(arr.slice(mid))

	return merge(left, right)
}

function merge(lefts, rights) {
	let sortedArray = []
	let leftIdx = 0
	let rightIdx = 0

	while (leftIdx < lefts.length && rightIdx < rights.length) {
		if (lefts[leftIdx] < rights[rightIdx]) {
			sortedArray.push(lefts[leftIdx])
			leftIdx++
		} else {
			sortedArray.push(rights[rightIdx])
			rightIdx++
		}
	}
	// Add any remaining
	return [...sortedArray, ...lefts.slice(leftIdx), ...rights.slice(rightIdx)]
}

console.log(mergeSort([8, 3, 5, 1]))

/*

          [8, 3, 5, 1]
         /            \
    [8, 3]          [5, 1]
    /    \          /    \
  [8]    [3]     [5]    [1]   <-- Base case reached
    \      /       \      /
    [3, 8]        [1, 5]   <-- Merging starts
         \         /
       [1, 3, 5, 8]  <-- Final sorted array


*/
