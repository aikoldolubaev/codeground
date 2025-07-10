//multiplication table of 5; 5->50;
function multiplicationTableOfFive(number) {
	if (number == 50) {
		return number
	} else {
		console.log(number)
		return multiplicationTableOfFive(number + 5)
	}
}
multiplicationTableOfFive(5) //output:50

//backwards multiplication table of 5, from top to bottom; 50->5;
function backwardsMultiplicationTableOfFive(number) {
	if (number == 5) {
		return number
	} else {
		console.log(number)
		return backwardsMultiplicationTableOfFive(number - 5)
	}
}
backwardsMultiplicationTableOfFive(50) //output:5
