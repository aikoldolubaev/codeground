/*
Given a 32-bit signed integer, reverse digits of an integer.

Example 1:

Input: 123
Output: 321
Example 2:

Input: -123
Output: -321
Example 3:

Input: 120
Output: 21


*/
function reversing(arr){
    const result = [];
    for(let i=arr.length-1; i>=0; i--){
        result.push(arr[i]);
    }
    return result;
}
console.log(reversing([1,2,-3]))