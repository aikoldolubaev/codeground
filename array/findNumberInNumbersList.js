//find a number in array of numbers
//input=>[9, 7, 8, 9, 25, 39, 47, 56] & number;  output=>number

function findNumberInNumbersList(numbers, number) {
	var cutInHalf = Math.floor(numbers.length / 2);
	var cutNumber = numbers[cutInHalf];

	if (cutNumber == number) {
		return cutNumber;
	} else if (cutNumber < number && numbers.length > 1) {
		return findNumberInNumbersList(numbers.splice(cutInHalf, numbers.length), number);
	} else if (cutNumber > number && numbers.length > 1) {
		return findNumberInNumbersList(numbers.splice(0, cutInHalf), number);
	} else {
		return 'Sorry, but there is no such a number';
	}
}

findNumberInNumbersList([ 9, 7, 8, 9, 25, 39, 47, 56 ], 7);
