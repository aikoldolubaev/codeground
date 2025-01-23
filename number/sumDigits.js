//adding given numbers to one another and find sum of numbers
// input=> 125; output=> 8;


/* 
	


*/
function findSum(number) {
	var result = 0;
	while (number % 10 >= 1) {
		var last = number % 10;
		result += last;
		number = Math.floor((number /= 10));
	}
	return result;
}
findSum(125);
