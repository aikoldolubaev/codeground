//find the sum of 2 elements that sums up to 7;
//input:[1,2,3,4,5];
//output:7
const sumOfTwo = (a)=>{
    let counter=0;
    for(let i=0; i<a.length/2; i++){
      if(a[i]+a[a.length-i]===7){
        counter++;
      }
    }
    return counter;
  }
sumOfTwo([1,2,3,4,5]);
  