// It doesn't work!

((arr) => {
    var result = [];
    for( var i=0; i<arr.length; i++){
        var current = arr[i];
        for( var j=arr.length-1; j >=0; j--){
            var last = arr[j];
            if(current !== last){
                result = [...result, current];
            }
        }
    }

    return result;

})([1,2,1,"a", "b", "a"])
