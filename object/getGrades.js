var students = [{
    John: {
        age: 30,
        grade: 5
    }, 
    Ana: {
        age: 35,
        grade: 8,
    },
    Tom: {
        age: 25,
        grade: 8,
    },
}]

function getGrades(){
    var result = [];
    for(var i=0; i<students.length; i++){
        for( var key in students[i]){
            if(students[i][key]["grade"]=== 8){
                result.push(key);   
            }
        }
    }
    return result;
}
getGrades(students);
