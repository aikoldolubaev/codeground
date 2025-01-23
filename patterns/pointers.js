//find the sum of 2 elements which equal to 0;
//input: [-3,-2,-1,0,1,2,3];
//output: -3 and 3;

let findSum = (arr)=>{
    for(let i=0; i<arr.length; i++){
        for(let j=i+1; j<arr.length; j++){
            if(arr[i]+arr[j]=== 0){
                return `${arr[i]} and ${arr[j]}`;
            }
        }
    }
}
//        i(-3)  iteration of j(-2,-1,0,1,2,3)   
//           i(-2) iteration of j(-1,0,1,2,3)
//              i iteration of j and so on
findSum([-3,-2,-1,0,1,2,3])
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//sum of numbers whithout counting the duplicates
//input: [1,2,3,4,5,5];
//output: 5;
const sumNumbers = (arr)=>{
    let i=0;
    for(let j=i+1; arr.length; j++){
        if(arr[i]!==arr[j]){
            i++;
            arr[i]=arr[j];
        }
    }
    return i;
}
//sumNumbers([1,2,3,4,5,5])//however this doesn't if the last array elements are the same
sumNumbers([1,2,3,4,5,7,1])//this will work




