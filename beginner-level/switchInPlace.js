const switchInPlace = (arr) => {
    for(let i=0; i<arr.length; i++){
        let start = arr[i];
        arr[i] = arr[arr.length-1 - i]; //currentLeft = currentRight
        arr[arr.length -1 -i]= start;
    }

    return arr;
}

switchInPlace([1,2,3,4,5,6]);//[6,5,4,3,2,1]






/*
high level:
    start from the current element and perform swap approach
*/