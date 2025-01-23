/* 
high level:
    given string "a*b*",  first insert first char for all possible positions in a string  and proceed forward with second char by inserting for all possible positions;

1)  "a*" => ac;
    "a*" => ad;

2) "a*b*" => "acb*";
    "a*b*" => "adb*";

3) "a*b*" => "acbc";
    "a*b*" => "adbd";
    "a*b*" => "acbd";
    "a*b*" => "adbc";
*/



function per(str, s){
    const result = [], hash = {}, arr = [str];
       
    while(arr.length){
        let curr = arr.shift().split("");// [ 'a', '*', 'b', '*' ]
        for(let i=0; i<curr.length; i++){
        if(curr[i]=="*"){
             for(let j=0; j<s.length; j++){
                curr[i]=s[j];//replacing "*" to "c"
                let c = curr.join("");//turning back to string;  [ 'a', 'c', 'b', '*' ]  => "acb*"
                if(c.includes("*")){
                    arr.push(c)//"acb*"
                }
                 else if(!hash[c]){//making sure we don't insert duplicates
                    result.push(c);
                    hash[c]=true;
           }
         }
        }
      }
     }
    return result;
}
 per("a*b*", "cd");//["adbc", "adbd", "acbc", "acbd"]
      