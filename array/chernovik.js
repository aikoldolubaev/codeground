const bubble = (a) => {
	for (let i = 0; i < a.length; i++) {
		for (let j = 0; j < a.length; j++) {
			if (a[j] > a[j + 1]) {
				let temp = a[j] //swapping contains in 3 steps
				a[j] = a[j + 1]
				a[j + 1] = temp
			}
		}
	}
	return a
}
bubble([4, 3, 2, 1])
