const insertionSort = list=> {
    for(let i=0; i<list.length; i++){
        let current = list[i];
        let j;
        for(j=i-1; list[j]>current && j>=0; j--){// while prevs > nexts;  <==
            list[j+1] = list[j];// passing value forward; next = prev
        }
        list[j+1]=current; // setting next=prev
    }
    return list;
}
console.log(insertionSort([4,3,2,1,5]));