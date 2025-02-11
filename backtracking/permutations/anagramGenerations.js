// This is implmented with input type of string whereas permutations input is array
// Both could be solved with the same approach except this makes with an argument of string
function generateAnagrams(str) {
  if (str.length <= 1) return [str];

  let anagrams = [];
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    let remainingStr = str.slice(0, i) + str.slice(i + 1);
    let remainingAnagrams = generateAnagrams(remainingStr);

    for (let anagram of remainingAnagrams) {
      anagrams.push(char + anagram);
    }
  }
  return [...new Set(anagrams)]; // Remove duplicates
}

// Example usage:
console.log(generateAnagrams("abc"));
