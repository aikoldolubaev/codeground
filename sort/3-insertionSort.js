// Take the next item and insert it into the correct position
// - by nature humans sort using insertion sort
const insertionSort = (list) => {
	for (let i = 1; i < list.length; i++) {
		const next = list[i]

		for (let j = i - 1; j >= 0 && list[j] > next; j--) {
			list[j + 1] = list[j] // Shift element forward
			list[j] = next // Place current in the correct position
		}
	}
	return list
}

console.log(insertionSort([4, 3, 2, 1, 5, 7]))
