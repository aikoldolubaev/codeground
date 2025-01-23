var findTheDifference = function(s, t) {
    let sArr = s.split("")
    let result = ''
    let hash = {}
    for(let i = 0; i < sArr.length; i++){
        let letter = sArr[i]
        hash[letter] = hash[letter]+1 || 1;
    }
    
    let tArr = t.split("")
    for(let j = 0; j < tArr.length; j++){
        let letter = tArr[j];

        if(!hash[letter] ||( hash[letter] && hash[letter] === 0)) {//if there is no left or do not exist
            result += letter//add to the difference
        }
        hash[letter] = hash[letter] - 1//keep subtracking from s hash;
        
    }
    return result;
    
};


/* 
Input:
s = "abcd"
t = "abcde"

Output:
e

Explanation:
'e' is the letter that was added.

high level:
    build a hashmap on first argument and on a second argument start decrementing from hashmap,
     and if you find that value is zero or do not exist then add that into result and return result;

*/