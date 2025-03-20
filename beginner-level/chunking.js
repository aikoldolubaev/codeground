const chunk = (array, size) => {
	const chunked = []
	let index = 0
	while (index < array.length) {
		chunked.push(array.slice(index, index + size)) //(0, 0+2), (2,2+2), (4,4+2)
		index += size
	}
	return chunked
}

chunk([1, 2, 3, 4, 5, 6, 7, 8], 2) //[ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ], [ 7, 8 ] ]

///////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////

const chunk2 = (array, size) => {
	const chunked = []
	for (let item of array) {
		const last = chunked[chunked.length - 1]
		if (!last || last.length === size) {
			//size=2; when array.length achieves the size
			chunked.push([item])
		} else {
			last.push(item)
		}
	}
	return chunked
}

chunk2([1, 2, 3, 4, 5, 6, 7, 8], 2) //[ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ], [ 7, 8 ] ]
