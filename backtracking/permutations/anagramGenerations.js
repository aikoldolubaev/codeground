function generateAnagrams(str) {
	if (str.length <= 1) return [str]

	let anagrams = []
	for (let i = 0; i < str.length; i++) {
		let char = str[i]
		let remainingStr = str.slice(0, i) + str.slice(i + 1)
		let remainingAnagrams = generateAnagrams(remainingStr)

		for (let anagram of remainingAnagrams) {
			anagrams.push(char + anagram)
		}
	}
	return [...new Set(anagrams)] // Remove duplicates
}

// Example usage:
// console.log(generateAnagrams('aab')) // [ 'aab', 'aba', 'baa' ]
console.log(generateAnagrams('abc')) // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]

/*

************** Recursion Tree **************
generateAnagrams("abc")
├── 'a' + generateAnagrams("bc")
│   ├── 'b' + generateAnagrams("c") → ['c'] → ['bc']
│   ├── 'c' + generateAnagrams("b") → ['b'] → ['cb']
│   └── Result: ['abc', 'acb']
│
├── 'b' + generateAnagrams("ac")
│   ├── 'a' + generateAnagrams("c") → ['c'] → ['ac']
│   ├── 'c' + generateAnagrams("a") → ['a'] → ['ca']
│   └── Result: ['bac', 'bca']
│
├── 'c' + generateAnagrams("ab")
│   ├── 'a' + generateAnagrams("b") → ['b'] → ['ab']
│   ├── 'b' + generateAnagrams("a") → ['a'] → ['ba']
│   └── Result: ['cab', 'cba']
│
└── Final result: ['abc', 'acb', 'bac', 'bca', 'cab', 'cba']



/*
************** Decision Tree **************
                 "abc"
            /      |      \
        "bc"      "ac"     "ab"
        /   \     /   \    /   \
      "c"   "b" "c"   "a" "b"  "a"
       |     |   |     |   |    |
      abc   acb bac   bca  cab  cba


*/
