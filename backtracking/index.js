function backtrack(path, candidates) {
	// Base case
	if (path.length === original.length) {
		result.push([...path])
		return
	}

	for (let i = 0; i < candidates.length; i++) {
		path.push(candidates[i])
		const newRemaining = candidates.filter((_, index) => index !== i)
		backtrack(path, newRemaining)
		path.pop()
	}
}
