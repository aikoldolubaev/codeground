const isValid = (parentheses) => {
	const stack = []
	const map = {
		')': '(',
		'}': '{',
		']': '[',
	}

	for (let char of parentheses) {
		if (char === '(' || char === '{' || char === '[') {
			stack.push(char)
		} else {
			if (stack.pop() !== map[char]) {
				return false
			}
		}
	}

	return stack.length === 0
}

console.log(isValid('()')) // true
console.log(isValid('()[]{}')) // true
console.log(isValid('(]')) // false
console.log(isValid('([)]')) // false
