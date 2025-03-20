//Explanation: summ all the numbers in between: 1+2+3+4=10
//input: [1, 4] || [4, 1] it should work either way
//output: 10

const numsSum = (arr)=>{
    let start = Math.min(arr[0], arr[1]); //1
    let end = Math.max(arr[0], arr[1]);//4
    let sum = 0;
    for(let i=start; i<=end; i++){
        total +=i;
    }
    return sum;
}

numsSum([1,4]);//10