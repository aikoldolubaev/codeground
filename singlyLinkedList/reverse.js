const list = {val:1, next:{val:2, next:{val:3, next:{val:4,next:{val:5, next:null}}}}}

function reverse(list){

    let current = list;
    let next = null;
    let prev = null;
    while(current){
        let next = current.next;
        current.next = prev;
        next.next = current;
        prev = current;
        current = next;
    }
    return list;
}

console.log(reverse(list));
