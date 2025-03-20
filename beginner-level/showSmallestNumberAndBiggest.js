// show smallest number and biggest number in the array of numbers
//input=> [12, 20, 1, 3, 5, 6, 7, 8, 11]; output=> {smallestNumber: 1, biggestNumber: 20}

function showSmallestAndBiggest(numbers) {
	return {
		smallestNumber: smallestNum(numbers),
		biggestNumber: biggestNum(numbers)
	};
}

function smallestNum(arr) {
	var smallest = arr[0];
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] < smallest) {
			smallest = arr[i];
		}
	}
	return smallest;
}
function biggestNum(arr) {
	var biggest = 0;
	for (i = 1; i < arr.length; i++) {
		if (arr[i] > biggest) {
			biggest = arr[i];
		}
	}
	return biggest;
}

showSmallestAndBiggest([ 12, 20, 1, 3, 5, 6, 7, 8, 11 ]);
