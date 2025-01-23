//given characters make sure opened character has it's closed character in the given string
//input: '(())' -> true
//input: '([})' -> false
//input: '(]([{}))' -> true

function matching(str) {
	let opened = []
	let closed = []
	let opening = {
		'(': true,
		'{': true,
		'[': true,
	}
	let closing = {
		')': true,
		'}': true,
		']': true,
	}
	for (let i = 0; i < str.length; i++) {
		if (str[i] in opening) {
			opened.push(str[i])
		}
		if (str[i] in closing) {
			closed.push(str[i])
		}
	}
	if (opened.length === closed.length) {
		let result = opened.concat(closed)
		for (let i = 0; i < str.length; i++) {
			if (result.indexOf(str[i]) === -1) {
				return false
			} else {
				return true
			}
		}
	} else {
		false
	}
}
matching('(([]))') //true
