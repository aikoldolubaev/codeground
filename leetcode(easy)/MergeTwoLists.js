/* 

Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

Example:

Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4


high level:
    I will take first given array and on each element start comparing whichever is less i will push into new array first

*/


function mergeSorted(arr1, arr2){
    const result = []
    for(let i=0; i<arr1.length; i++){
        if(arr1[i]>=arr2[i]){
            result.push(arr2[i])
            result.push(arr1[i])
        }
        else if(arr1[i]<=arr2[i]){
            result.push(arr1[i]);
            result.push(arr2[i]);
        }
    }
    return result;
}
console.log(mergeSorted([1,2,4], [1,3,4]))


