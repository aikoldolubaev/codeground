const order = (arr, num)=>{
    for(let i=0; i<arr.length; i++){
        return num<=arr[i]?i:arr.length;
    }
}

order([1,2,3,5], 4);