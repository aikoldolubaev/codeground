let obj1 = {
    start: 1,
    end: 2,
  }
  
  let obj2 = {
    start: 3,
    end: 5,
  }
  
  const overlap = (obj1, obj2)=>{
    if(obj1.end <= obj2.start){
      return "no overlap";
    }
    return 'overlap';
  }
  overlap(obj1, obj2);//'no overlap
  
  /*

  |---------------------|---------------|-------------|
  1                     2               3             4
  obj1.start        obj1.end         obj2.start.  obj2.end
  
  
  */