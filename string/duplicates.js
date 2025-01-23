function duplicates(str) {
    var end = '';
    str.split('')
              .sort()
              .reduce((sum,num) => {
                  if(!sum[num]){
                    sum[num] = true;
                    end += num;
                  }
                  return sum;
                }, {});
    return end;
  }
  duplicates('aabcad');
  