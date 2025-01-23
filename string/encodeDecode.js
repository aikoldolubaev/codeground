//input=> 'a3b2c4d1'; output=> "aaabbccccd"
function encode(str) {
	var result = '';
	for (var i = 0; i < str.length; i++) {
		var current = str[i];
		var next = str[i + 1];
		if (!Number(current)) {
			for (var j = 0; j < next; j++) {
				result += current;
			}
		}
	}
	return result;
}
encode('a3b2c4d1');

//input=> 'aaabbcccd'; outpu=> "a3b2c3d1"
function decode(str) {
	var counter = 1;
	var result = '';
	for (var i = 0; i < str.length; i++) {
		if (str[i] !== str[i + 1]) {
			result += str[i] + counter;
			counter = 1;
		} else {
			counter += 1;
		}
	}
	return result;
}
decode('aaabbcccd');
