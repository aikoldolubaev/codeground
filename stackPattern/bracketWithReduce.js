(function bracketWithReduce(str){
    return !str.split("").reduce(function(counter, current, idx){
        if("[" === current || "{" === current || "(" === current){
            return ++counter;
        }
        if("]" === current || "}" === current || "}" === current){
            return --counter;
        }
    }, 0);
    
})("[[{]]"); // false

!7;//false
!-7;//false
!0;//true
!""//true
!" "//false
!{}//false