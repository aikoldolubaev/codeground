let csv = "GENDER,ADDRESS,DOB,PROFESSION,Name\nMale,123 Tacoma St,01/01/1990,Student,John Doe\nMale,949 Franklin ST,02/05/1986,Doctor,John Smith";

function parseCSV(str){
    let data = [];
    let arr = str.split("\n");//["GENDER,ADDRESS,DOB,PROFESSION,Name", "Male,123 Tacoma St,01/01/1990,Student,John Doe", "Male,949 Franklin ST,02/05/1986,Doctor,John Smith"]
    let rowHeader = arr[0].split(",");//["GENDER", "ADDRESS", "DOB", "PROFESSION", "Name"]
    let professions = ["Student", "Engineer", "Doctor"];
    let professionInd = rowHeader.indexOf("PROFESSION")
    if(professionInd === -1){ //edge case
        return data;
    }
    for( let i=1;  i<arr.length;  i++ ){
        let row = arr[i].split(",");//["Male", "123 Tacoma St", "01/01/1990", "Student", "John Doe"] 
        let obj = {};//{GENDER: "Male", ADDRESS: "123 Tacoma St", DOB: "01/01/1990", PROFESSION: "Student", Name: "John Doe"}
        row.forEach((item, ind) =>{ 
            if (professions.includes(row[professionInd]) ) {
                obj[rowHeader[ind]] = item;
            }
        });
        if(Object.keys(obj).length){
            data.push(obj);
        }
    }
    return data;
}

parseCSV(csv);//[ { GENDER: 'Male', ADDRESS: '123 Tacoma St', DOB: '01/01/1990', PROFESSION: 'Student', Name: 'John Doe' },    { GENDER: 'Male', ADDRESS: '949 Franklin ST', DOB: '02/05/1986',  PROFESSION: 'Doctor',  Name: 'John Smith' } ]


