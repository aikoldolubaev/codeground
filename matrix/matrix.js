function spiral(n) {
	let results = []

	for (let i = 0; i < n; i++) {
		results.push([])
	}
    
	let counter = 1
	let start = 0
	let end = n - 1
	let top = 0
	let bottom = n - 1

	while (start <= end && top <= bottom) {
		//Top
		for (let i = start; i <= end; i++) {
			results[start][i] = counter
			counter++
		}
		top++
		//Right
		for (let i = top; i <= bottom; i++) {
			results[i][end] = counter
			counter++
		}
		end--
		//Bottom
		for (let i = end; i >= start; i--) {
			results[bottom][i] = counter
			counter++
		}
		bottom--
		//Middle
		for (let i = bottom; i >= start; i--) {
			results[i][start] = counter
			counter++
		}
		start++
	}
	return results
}
spiral(5)
