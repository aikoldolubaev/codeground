const rotation = (str1, str2)=> {
    if(str1.length !== str2.length) {
        return false;
    }
    for(let i = 0; i < str1.length; i++) {
//                                    aja                       v    
        const rotate = str1.slice(i, str1.length) + str1.slice(0, i);//1 vaja; 2 ajav; 3 java
        if(rotate === str2) {
            return true;
        }
    }

    return false;
}
rotation('vaja', 'java');//true
