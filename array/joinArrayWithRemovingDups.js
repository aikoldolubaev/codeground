//join arrays with removing duplicates the result should be one array without duplicates
const joinArray = (arr1, arr2)=>{
    let combine = arr1.concat(arr2);
    return combine.filter((num)=>{
        return arr1.indexOf(num)=== -1 || arr2.indexOf(num)=== -1;
    });
}

joinArray([1,2,3,4], [1,2,6,7]);//[ 3, 4, 6, 7 ]