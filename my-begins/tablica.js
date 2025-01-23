const makeTablica = (num) => {
	console.log(num)
	if (num === 0) {
		return num
	} else {
		let number = makeTablica(num - 4)
		return number
	}
}
makeTablica(40)
