//input => "hello" output => "Hello"

function capitalizeFirstLetterOfWord(str) {
	var splitted = str.split(''); //'hello'.['h','e','l','l','o']
	splitted[0]=splitted[0].toUpperCase();//'h'.'H'
	return splitted.join('');
}
capitalizeFirstLetterOfWord('hello');//'Hello'
