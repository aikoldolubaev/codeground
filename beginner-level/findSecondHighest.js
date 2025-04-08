function second_largest(numbers){
    let highest = 0
    let secondHighest = 0
    for (number of numbers){
        if (number > highest){
            secondHighest = highest
            highest = number
        } else if(number > secondHighest && number != highest){
         secondHighest = number  
        }
    }
    return secondHighest
}

console.log(second_largest([1,2,2,1,2,9,4,1,5,10,20]))
