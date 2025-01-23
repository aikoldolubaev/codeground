// REDUCE
var ar = [1, 2, 3, 4];
function reducer(accumulator, current, idx){
//     return accumulator[current] = idx;//3
    accumulator[current] = idx;//3
    return accumulator;
}
ar.reduce(reducer, {});// {1: 0, 2: 1, 3: 2, 4: 3}