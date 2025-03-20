//find missing number in array which are ascending order of numbers

//input=>[1, 2, 3, 5, 6, 7, 8, 9, 10] output=> 4

// function findMissingNum(numbers) {
// 	var missing = numbers[0];
// 	for (var i = 0; i <= numbers.length; i++) {
// 		if (numbers.indexOf(i) == -1) {
// 			missing = i;
// 		}
// 	}
// 	return missing;
// }
// findMissingNum([ 1, 2, 3, 5, 6, 7, 8, 9, 10 ]);

function findMissingNum(numbers) {
	var missing = []
	for (var i = 0; i <= numbers.length; i++) {
		if (numbers[i + 1] - numbers[i] > 1) {
			//next - current > 1
			missing.push(numbers[i + 1] - numbers[0]) //if it starts with numbers[0]=1 then start from 0 index
			//missing.push(numbers[i+1]-numbers[1]);//if it starts with numbers[0]=0 then start from 1 index
		}
	}
	return missing
}
findMissingNum([1, 2, 3, 5, 6, 7, 8, 9, 10, 12])
