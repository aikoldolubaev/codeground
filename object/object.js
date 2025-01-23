const oldStyle = (num) => {
	const format = {
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
		I: 1
	};
	let roman = '';
	for (key in format) {
		while (num >= format[key]) {
			roman += key;//   ""+I
			num -= format[key];// 3-1
		}
	}
	return roman;
};

oldStyle(3);
