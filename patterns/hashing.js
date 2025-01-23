
//if every element in first array has squared root sum in the second array then return true;
const same =(arr1, arr2)=>{
    if(arr1.length !== arr2.length){
      return false;
    }
    for(let i=0; i<arr1.length; i++){
      let index = arr2.indexOf(arr1[i] ** 2);
      if(index == -1){
        return false;
      }
      arr2.splice(index, 1);
    }
    return true;
  }
  same([1,2,3,2], [9,1,4,4]); //true;

  /////////////////////////////////////////////////////////////////////////////////////////////

  const exist = (arr1, arr2)=>{
    if(arr1.length !== arr2.length){
      return false;
    }
    let hash1 = {};
    let hash2 = {};
    for(let val of arr1){
      hash1[val] = (hash1[val]|| 0)+1;
    }
    for(let val of arr2){
      hash2[val] = (hash2[val]|| 0)+1;
    }
    for(let key in hash1){
      if(!(key ** 2 in hash2)){
        return false;
      }
      if(hash2[key ** 2] !== hash1[key]){
        return false;
      }
    }
    return true;
  }
  
  exist([1,5,3,2], [9,1,25,4]); //true;

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function highest(strings) {
  const hash = {};
  let max = 0;
  let most = strings[0];

  for(let i = 0; i < strings.length; i++) {
      const current = strings[i];

      hash[current]?hash[current]++:hash[current]=1;

      if(hash[current] > max) {
          max = hash[current];
          most = current;//when we catch highest value then we assign current to most
      }
  }

  return most;
}


highest(['a', 'b', 'c', 'a']);//a
