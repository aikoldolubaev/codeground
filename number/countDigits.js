//find how many numbers in gives numbers
//input=> 125; output=> 3
function count(num) {
	var count = 0;
	if (!num) {
		return 1;
	}
	while (num >= 1) {
		num /= 10;
		count++;
	}
	return count;
}
count(125);
