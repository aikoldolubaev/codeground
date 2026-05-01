const validParenthesis = (parentheses) => {
	const stack = []
	const closingToOpeningMap = {
		')': '(',
		'}': '{',
		']': '[',
	}

	for (let char of parentheses) {
		const isOpen = char === '(' || char === '{' || char === '['
		if (isOpen) {
			stack.push(char)
		} else {
			if (stack.pop() !== closingToOpeningMap[char]) {
				return false
			}
		}
	}

	return stack.length === 0
}

console.log(validParenthesis('()')) // true
console.log(validParenthesis('()[]{}')) // true
console.log(validParenthesis('(]')) // false
console.log(validParenthesis('([)]')) // false
