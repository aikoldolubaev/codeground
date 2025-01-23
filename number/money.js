const penny = (money)=>{
  const change = [1,5,25,50, 100];
  const result = [];
  for(let i=0; i<change.length; i++){
    const current = change[change.length-i-1];//i=0; change[change.length-0-1];
    const count = Math.floor(money/current);
    money = money%current;
    result.unshift(count);
  }
  return result;
}
penny(193);// [ 3, 3, 1, 1, 1 ]



/* 
  solution approach:

Divide money by the size of change


*/