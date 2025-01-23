// reverse lastname and firstname
// input=> Micheal Scowfield; output=> Scowfield Micheal
function reverseName(fullName) {
	let splitted = fullName.split(' ');
	let reversed = splitted.reverse();
	let joined = reversed.join(' ');
	return joined;
}

reverseName('Micheal Scowfield');
