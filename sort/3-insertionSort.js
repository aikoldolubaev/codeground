// Start from the second item and insert it into the left correct position
// - by nature humans sort using insertion sort
const insertionSort = (list) => {
	// Start from the second element (index 1) and compare it with the elements before it
	for (let i = 1; i < list.length; i++) {
		const current = list[i]
		// shift current element to the left until we find the correct position
		for (let j = i - 1; j >= 0 && list[j] > current; j--) {
			list[j + 1] = list[j] // Shift to the right
			list[j] = current // Shift to the left
		}
	}
	return list
}

console.log(insertionSort([4, 3, 2, 1]))
