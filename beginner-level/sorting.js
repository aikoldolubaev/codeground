const selection=(a)=>{
    for(let i=0;i<a.length;i++){
      let lowest =i;//right now it is just a current
      for(let j=i+1; j<a.length; j++){
        if(a[j]<a[i]){//if next one is smaller than current
          lowest = j;//reassign
        }
        let temp =a[i];//swapping
        a[i]=a[lowest];
        a[lowest]=temp;
      }
    }
    return a;
}
selection([4,3,2,1]);