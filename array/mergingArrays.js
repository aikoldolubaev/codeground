//Merge 2 arrays in sorted order
const mergeArrays = (a1, a2)=>{
    const a = a1.concat(a2);
    let sorted = true;
    while(sorted){
      sorted = false;
      for(let i=0; i<a.length; i++){
        if(a[i- 1] > a[i]){
          sorted = true;
          let temp = a[i-1];//swapping
          a[i-1]= a[i];
          a[i] = temp
        }
      }
    }
    return a;
  }
  
  mergeArrays([3,2,1],[4,5,6]);