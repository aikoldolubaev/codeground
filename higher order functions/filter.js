// FILTER
words = ['a', 'b', 'c', 'd', 'e', 'f']
var deleteWords = words.filter( (word, index, arr) => {
  arr.pop()// arr is words
//   return true;
    return typeof word == "string" && word<4;
});// ["a", "b", "c"]

words = ['a', 'b', 'c', 'd', 'e', 'f']
words.filter( (word, index, arr) => {
  arr.pop()// arr is words
//   return true;
    return typeof word == "string" && word<4;
});// []


var func = ()=> {
    return "ok";
}
func();//"ok"
func;// ()=> { return "ok "}

function del(word, index, arr){
    arr.pop();
    return typeof word == "string" && word <4;
}
words = ['a', 'b', 'c', 'd', 'e', 'f']
var deleteWords = words.filter(del);// ["a", "b", "c"]

function del(word, index, arr){
    arr.pop();
    return typeof word == "string" && word <4;
}
words = ['a', 'b', 'c', 'd', 'e', 'f']
words.filter(del);// ["a", "b", "c"]