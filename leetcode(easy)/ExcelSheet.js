/* 
Given a positive integer, return its corresponding column title as appear in an Excel sheet.

For example:

    1 -> A
    2 -> B
    3 -> C
    ...
    26 -> Z
    27 -> AA
    28 -> AB 
    ...
Example 1:

Input: 1
Output: "A"
Example 2:

Input: 28
Output: "AB"
Example 3:

Input: 701
Output: "ZY"


high level:
    build a map of all alphabets

*/



function convertToTitle(num) {
    let str = '';
    while (num) {
        let unicode = String.fromCharCode( (num - 1) % 26 + 'A'.charCodeAt() );
        num = Math.floor((num - 1) / 26);
        result = unicode + result;
    }
    return str;
};

console.log(convertToTitle(1));//"A"