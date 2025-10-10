// Leetcode 796. Rotate String
// https://leetcode.com/problems/rotate-string/description/

const rotation = (str1, str2) => {
	if (str1.length !== str2.length) {
		return false
	}
	for (let i = 0; i < str1.length; i++) {
		const rotate = str1.slice(i, str1.length) + str1.slice(0, i)
		if (rotate === str2) {
			return true
		}
	}

	return false
}
rotation('vaja', 'java') //true
