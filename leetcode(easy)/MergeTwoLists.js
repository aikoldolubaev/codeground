function mergeSorted(arr1, arr2) {
	const result = []
	for (let i = 0; i < arr1.length; i++) {
		if (arr1[i] > arr2[i]) {
			result.push(arr2[i], arr1[i])
		} else {
			result.push(arr1[i], arr2[i])
		}
	}
	return result
}
console.log(mergeSorted([1, 2, 4], [1, 3, 4])) // [ 1, 1, 2, 3, 4, 4 ]
