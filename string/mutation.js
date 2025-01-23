const mutation=(str, str2)=>{
    let mutated = ""
   for(let i=0; i<str2.length; i++){
     mutated += str.slice(i, i+1);
     if(mutated === str2){
       return true;
     }
   }
   return false;
  }
  console.log(mutation('Hello', "He"));//true;
  