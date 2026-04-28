const recursion = (num) => {
	if (num === 0) return 0
	console.log('✋ Before:', num)
	recursion(num - 1)
	console.log('✅ After:', num)
	return num // if not return num, it will return undefined
}

console.log(recursion(3))
// ✋ Before: 3
// ✋ Before: 2
// ✋ Before: 1
// ✅ After: 1
// ✅ After: 2
// ✅ After: 3
// 3
