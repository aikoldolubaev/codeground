const permutations = (arr) => {
	let permutations = [[]]

	for (const num of arr) {
		const nextPermutations = []

		for (const perm of permutations) {
			for (let i = 0; i <= perm.length; i++) {
				// Insert `num` at every possible position in `perm`
				const newPerm = [...perm.slice(0, i), num, ...perm.slice(i)]
				nextPermutations.push(newPerm)
			}
		}

		permutations = nextPermutations
	}

	return permutations
}

// Example usage:
const result = JSON.stringify(permutations([1, 2, 3]))
console.log(result)
/* 
Num is 3 and insert it in every possible position
    [
        [3,2,1],
        [2,3,1],
        [2,1,3],

        [3,1,2],
        [1,3,2],
        [1,2,3]
    ] 
*/
const result2 = JSON.stringify(permutations([1, 2]))
console.log(result2)
/*
    [
        [2,1],
        [1,2]
    ]
*/
