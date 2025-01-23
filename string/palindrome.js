function palindrome(word) {
  var backwarded = word
    .split("")
    .reverse()
    .join("");
  return word === backwarded;
}
palindrome("timit"); //true
palindrome("hello"); //false
