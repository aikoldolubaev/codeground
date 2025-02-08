const selectionSort = (list) => {
	for (let i = 1; i < list.length; i++) {
		const current = list[i]
		for (let j = i - 1; j >= 0 && list[j] > current; j--) {
			list[j + 1] = list[j] // Shift element forward
			list[j] = current // Place current in the correct position
		}
	}
	return list
}

console.log(selectionSort([4, 3, 2, 1, 5, 7]))
