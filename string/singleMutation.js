function isSingleMutation(str1, str2) {
    if(Math.abs(str1.length - str2.length) > 1) {//making sure that the differences are not greater one
        return false;
    }

    let mutations = 0;

    for(let i = 0, j = 0; i < str1.length || j < str2.length; i++, j++) {//making sure both indexes react the end
        if(str1[i] !== str2[j]) {//chars are not equivalent
            mutations++;//if the strings are the same length, we only increment our mutations
            if(mutations > 1) {//if we have visited this block and it's greater than one
                return false;
            }

            if(str1.length > str2.length) {
                j--;//the strings are now lined up till the end
            } else if(str1.length < str2.length){
                i--;//the strings are now lined up till the end
            }
        }
    }

    return true;
}

console.log(isSingleMutation('abc', "abcd"));//true