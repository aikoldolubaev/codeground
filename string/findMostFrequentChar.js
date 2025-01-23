// find frequently repeated letters in a word
// input=> "HELLO" output=> "L, 2"

function findMostFrequentChar(chars) {
	var object = {};
	var letter;
	var max = 1;
	for (var i of chars) {
		if (object[i]) {
			object[i]++;
		} else {
			object[i] = 1;
		}
		if (object[i] > max) {
			max = object[i];
			letter = i;
		}
	}
	return `${letter}, ${max}`;
}
findMostFrequentChar('HELLO');
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////

const frequentChar = (str)=>{
	const charMap = {};
	let max = 0;
	let maxChar = "";
	for(let char of str){
	  if(charMap[char]){
		charMap[char]++;
	  }
	  else {
		charMap[char]=1;
	  }
	}
	for(let char in charMap){
	  if(charMap[char]> max){//charMap[char](1)>max(1)
		max = charMap[char];
		maxChar = char;
	  }
	}
	return `${maxChar}: ${max}`;
  }
  
  frequentChar("Hello there");//output: "e: 3"
  
  