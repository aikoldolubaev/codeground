// Anagrams:   Tesla =>Sleat =>LA set, least

const anagram = (str1, str2) => {
	return helper(str1) === helper(str2)
}

let helper = (sentence) => {
	return sentence.toLowerCase().replace(/[^\W]/g, '').split('').sort().join() //Te sla.te sla.tesla.['t', 'e', 's', 'l', 'a'].['a','e','l','s','t',].'alst';
}

anagram('Tes la', 'Sle at')

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const anagram2 = (str1, str2) => {
	let first = helper2(str1)
	let second = helper2(str2)
	for (let key in first) {
		if (first[key] !== second[key]) {
			// 1 !== 1
			return false
		}
	}
	if (Object.keys(first).length !== Object.keys(second).length) {
		//array.length !== array.length
		return false
	}
	return true
}

const helper2 = (sentence) => {
	let hash = {}
	for (let i = 0; i < sentence.length; i++) {
		hash[sentence[i]] ? hash[sentence[i]]++ : (hash[sentence[i]] = 1)
	}
	return hash // {t: 1, e: 1, s: 1, l: 1, a: 1}
}

anagram2('tesla', 'least')

/*
  solution approach:
    Sort the given word and and assign value to each letter & compare the values & compare the length
*/
