function bracketWithReduce(str) {
	return !str.split('').reduce((counter, current, idx) => {
		if ('[' === current || '{' === current || '(' === current) {
			return ++counter
		}
		if (']' === current || '}' === current || '}' === current) {
			return --counter
		}
	}, 0)
}

console.log(bracketWithReduce('[[{}]]')) // false

// !7 //false
// !-7 //false
// !0 //true
// !'' //true
// !' ' //false
// !{} //false
