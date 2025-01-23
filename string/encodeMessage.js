//encode message
//input=> "It is top secret and nobody should know about it" output=> "Lw lv wrs vhfuhw dqg qrergb vkrxog nqrz derxw lw"
function encodeMessage(message, shift) {
	shift = shift % 26;
	var lowerCased = message.toLowerCase();
	var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
	var encoded = '';

	for (var i = 0; i < lowerCased.length; i++) {
		var currentLetter = lowerCased[i];
		if (currentLetter === ' ') {
			encoded += currentLetter;
			continue;
		}
		var currentIndex = alphabet.indexOf(currentLetter);
		var shifted = currentIndex + shift;
		if (shifted > 25) shifted = shifted - 26;
		if (shifted < 0) shifted = 26 + shifted;
		if (message[i] === message[i].toUpperCase()) {
			encoded += alphabet[shifted].toUpperCase();
		} else encoded += alphabet[shifted];
	}

	return encoded;
}
encodeMessage('It is top secret and nobody should know about it', 3);

//decode message
function decodeMessage(message, unshift) {
	unshift = unshift % 26;
	var lowerCased = message.toLowerCase();
	var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
	var decoded = '';

	for (var i = 0; i < lowerCased.length; i++) {
		var currentLetter = lowerCased[i];
		if (currentLetter === ' ') {
			decoded += currentLetter;
			continue;
		}
		var currentIndex = alphabet.indexOf(currentLetter);
		var unshifted = currentIndex - unshift;
		if (unshifted > 25) unshifted = unshifted - 26;
		if (unshifted < 0) unshifted = 26 + unshifted;
		if (message[i] === message[i].toUpperCase()) {
			decoded += alphabet[unshifted].toUpperCase();
		} else decoded += alphabet[unshifted];
	}

	return decoded;
}
decodeMessage('Lw lv wrs vhfuhw dqg qrergb vkrxog nqrz derxw lw', 3);
