// leetcode 28. Find the Index of the First Occurrence in a String
// https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/description/

const strMatch = (candidates, pattern) => {
	let times = 0
	for (let i = 0; i < candidates.length; i++) {
		let sample = candidates.substring(i, i + pattern.length)
		if (sample === pattern) {
			times++
		}
	}
	return times
}

console.log(strMatch('okbokoko', 'ok')) //3
