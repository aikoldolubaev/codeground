const subsequentPalindrome = str =>{
    let startIndex = 0;
    let maxLength = 1;
    const helper=(left, right)=>{
      while(left >=0 && right < str.length && str[left]=== str[right]){//we're are making sure that left and right don't go over board
        let currentLength = right - left +1;
        if(currentLength > maxLength){
          maxLength = currentLength;
          startIndex = left;
        }
        left -=1;
        right +=1;
      }
    }
    for(let i=0; i<str.length; i++){
      helper(i-1, i+1);
      helper(i, i+1);
    }
    return str.slice(startIndex, startIndex + maxLength);
  }
  subsequentPalindrome('cbbd');//bb