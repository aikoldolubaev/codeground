// you have numbers [1,2,3,4]; find pairs that equal to sum which is say: 5

const twoPairs=(numbers, sum)=>{
  var pairs = [];

  for (var i = 0; i < numbers.length; i++) {
    var current = numbers[i];
    var counterpart = sum - current;
    if (numbers.indexOf(counterpart) !== -1) {
      pairs.push([current, counterpart]);
    }
  }

  return pairs;
}

twoPairs([2, 3, 4, 1, 3, 2], 5);//[ [ 2, 3 ], [ 3, 2 ], [ 4, 1 ], [ 1, 4 ], [ 3, 2 ], [ 2, 3 ] ]

////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////

const twoPairs=(numbers, sum)=>{
  var pairs = [];
  var list = [];

  for (var i = 0; i < numbers.length; i++) {
    var current = numbers[i];
    var counterpart = sum - current;
    if (list.indexOf(counterpart) !== -1) {
      pairs.push([current, counterpart]);
    }
    list.push(current);
  }

  return pairs;
}

twoPairs([2, 3, 4, 1, 3, 2], 5);//[ [ 3, 2 ], [ 1, 4 ], [ 3, 2 ], [ 2, 3 ] ]

/*
solution approach:
  find counter part: which is sum - num= you get counterpart
  stor all given numbers in
*/