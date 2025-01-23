// // first approach
function calculate(str) {
    if ((typeof str !== "string") && !str || !str.length ) return 0;

    let stack = []
    let currentNum = 0;
    let operand = '+';// first time around I just want to add
    let sum = 0;

    for (let i = 0; i < str.length; i++) {
        let currentChar = str[i];

        if (Number(currentChar)) {
            currentNum = Number(currentChar);
        }

        // not number or not last element, also keep in mind it might be whitespace
        if (!Number(currentChar) && currentChar !== " " || i === str.length-1) {  
            if (operand == '-') {
                stack.push(-currentNum);
            } else if (operand == '+') {
                stack.push(currentNum);
            } else if (operand == '*') {
                stack.push(stack.pop() * currentNum);
            } else if (operand == '/') {
                stack.push(stack.pop() / currentNum);
            }

            operand = currentChar;
            currentNum = 0;
        }
    }

    while(stack.length){
        sum += stack.pop();
    }
    return sum;
}
console.log(calculate("3+2*2"));//7


//Second approach without using stack but taking last
function calculate2(str) {
    if (!str || !str.length ) return 0;

    let currentNumber = 0;// lastNumber = 0, result = 0; 
    let lastNumber = 0;
    let result = 0; 
    let operand = '+';//first time around I just want to add

    for (let i = 0; i < str.length; i++) {
        let currentChar = str[i];
        if (Number(currentChar)) {
            currentNumber = Number(currentChar);
        }
        if (!Number(currentChar) && currentChar !== " " || i == str.length - 1) {
            if (operand == '+' || operand == '-') {
                //first add to result
                result += lastNumber;
                // if operation is positive then current is positive, else negative number is negative
                lastNumber = (operand == '+') ? currentNumber : -currentNumber;
            } else if (operand == '*') {
                lastNumber = lastNumber * currentNumber;
            } else if (operand == '/') {
                lastNumber = lastNumber / currentNumber;
            }
            operand = currentChar;
            currentNumber = 0;
        }
    }
    result += lastNumber;
    return result;
}


console.log(calculate2("3+2*2"));//7