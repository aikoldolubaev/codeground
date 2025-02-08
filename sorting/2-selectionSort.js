const selectionSort = (arr) => {
	for (let i = 0; i < arr.length; i++) {
		let minsIndex = i
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[j] < arr[minsIndex]) {
				minsIndex = j
			}
		}
		if (minsIndex !== i) {
			let temp = arr[i]
			arr[i] = arr[minsIndex]
			arr[minsIndex] = temp
			// [arr[i], arr[minsIndex]] = [arr[minsIndex], arr[i]]
		}
	}
	return arr
}

console.log(selectionSort([4, 3, 2, 1, 5]))
