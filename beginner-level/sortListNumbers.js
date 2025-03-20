//sort array of numbers in descending order
//input=>[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]; output=> [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

function sortlistNumbers(numbers) {
	for (var i = numbers.length; i > 0; i--) {
		for (var j = 0; j < i; j++) {
			if (numbers[j] > numbers[j + 1]) {
				var current = numbers[j];
				numbers[j] = numbers[j + 1];
				numbers[j + 1] = current;
			}
		}
	}

	return numbers;
}

sortlistNumbers([ 9, 8, 7, 6, 5, 4, 3, 2, 1, 0 ]);

//second example
function sortNumbers2(numbers) {
	for (var i = 0; i < numbers.length; i++) {
		var current = numbers[i];
		var j = i - 1;
		while (j >= 0 && numbers[j] > current) {
			numbers[j + 1] = numbers[j];
			j--;
		}
		numbers[j + 1] = current;
	}
	return numbers;
}

sortNumbers2([ 9, 2, 5, 6, 4, 3, 7, 10, 1, 8 ]);
