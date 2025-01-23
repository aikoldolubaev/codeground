function numberReverse(n){
    let reversed = n.toString().split('').reverse().join('');//15."15".['1','5'].['5','1'].'51'
    return parseInt(reversed) * Math.sign(n);//'51'.51; making sure if it positive int or negative int
  }
  
  numberReverse(15);//output: 51



  ///////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////


  const reverseInt = (n)=>{
    const reversed = n.toString().split('').reverse().join('');
    if(n<0){
      return parseInt(reversed)* -1;
    }
    return parseInt(reversed);
  }
  
  reverseInt(15)