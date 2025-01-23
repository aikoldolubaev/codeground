/*
Approach:
  1 every time you see opening char-- place it in the stack
  2 every time you see closing chat, compare to last one the stack and delete from the stack

*/

const findIfBalancedPairs = (str) => {
	const stack = []
	const closedBrackets = {
		')': ')',
		'}': '}',
		']': ']',
	}
	const openedBrackets = {
		'(': '(',
		'{': '{',
		'[': '[',
	}

	for (let i = 0; i < str.length; i++) {
		if (openedBrackets[str[i]]) {
			stack.push(str[i])
		} else {
			if (closedBrackets[str[i]]) {
				stack.pop()
			}
		}
	}
	return stack.length === 0 //return true if stack is empty
}
console.log(findIfBalancedPairs('([({(10-9)})])')) //true;
