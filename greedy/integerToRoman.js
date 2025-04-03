const integerToRoman = (num) => {
	const romanMap = {
		M: 100,
		CM: 900,
		D: 500,
		CD: 400,
		C: 100,
		XC: 90,
		L: 50,
		XL: 40,
		X: 10,
		IX: 9,
		V: 5,
		IV: 4,
		I: 1,
	}
	let roman = ''
	for (key in romanMap) {
		while (num >= romanMap[key]) {
			roman += key
			num -= romanMap[key]
		}
	}
	return roman
}

console.log(integerToRoman(5))
