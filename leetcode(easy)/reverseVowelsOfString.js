var reverseVowels = function(s) {
    const vowels = {
        a:true,
        e:true,
        i:true,
        o:true,
        u:true,
        A:true,
        E:true,
        I:true,
        O:true,
        U:true
      }
    let vowelsString = ""
    let result = ""
    for(let i=0; i<s.length; i++){
        if(vowels[s[i]]){
        vowelsString+=s[i]
        }
    }
    let reversed= vowelsString.split("").reverse();
    if(reversed.length == s.length){// if in case => Aa || ai || Ea 
        return reversed.join("");
    }
    for(let i=0; i<s.length; i++){
        if(vowels[s[i]]){
        result +=reversed.shift();
        }
        else{
        result += s[i];
        }
    }
    
    return result;
};

/*Input: "hello"
Output: "holle"
high level:
  1 build vowels
  2 loop through the given string
  3 take all vowels and store it;
  4 loop again through the given string and if current is vowel then take from from stored vowels and reverse it take them by order
 edge case:
    if in case given string is all vowels then just reverse it and return
 */