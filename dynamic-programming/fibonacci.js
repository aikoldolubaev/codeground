// No memo
function fibonacci(num){
    if(num <= 2 ) return 1;
    return fibonacci(num - 1 ) + fibonacci(num -2);
}
console.log(fibonacci(6));//8

// Memoized
function fibonacci(num, memo=[]){
    if(memo[num]) return memo[num]
    if(num <= 2) return 1
    return fibonacci(num -1, memo) + fibonacci(num-2, memo)
}
console.log(fibonacci(6));//8

