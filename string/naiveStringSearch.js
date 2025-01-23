function naiveStringSearch(samples, word){
    var counter = 0;
    for(var i=0; i<samples.length; i++){
         var j;
         for(j=0; j<word.length; j++){
             if(samples[i+j] !== word[j]) break;// going to compare each letter in samples & word;
             //with break leveraging "omg" to start again;
         }
         if(j== word.length){
             counter++;
         }
    }
    return counter;
}
naiveStringSearch("wowomgzomgomg", "omg");//2