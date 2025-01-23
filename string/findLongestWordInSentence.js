//Find longest word in sentence

//input => "You are awesome" output=> "awesome"

function findLongestWordInSentence(sentence) {
	var cleaned = sentence.replace(/\W/g, ' ');
	var longest = '';
	var splitted = cleaned.split(' ');
	for (i = 0; i < splitted.length; i++) {
		if (splitted[i].length > longest.length) {
			longest = splitted[i];
		}
	}

	return longest;
}

findLongestWordInSentence('You are awesome');
