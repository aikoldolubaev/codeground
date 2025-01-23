//multiplication table of 5; 5->50;
function multiplicationTableOfFive(number) {
  if (number == 50) {
    return number;
  } else {
    console.log(number);
    return multiplicationTableOfFive(number + 5);
  }
}
multiplicationTableOfFive(5); //output:50

//backwards multiplication table of 5, from top to bottom; 50->5;
function backwardsMultiplicationTableOfFive(number) {
  if (number == 5) {
    return number;
  } else {
    console.log(number);
    return backwardsMultiplicationTableOfFive(number - 5);
  }
}
backwardsMultiplicationTableOfFive(50); //output:5

//Factorial;  5*4*3*2*1=120; 4*3*2*1=24; 3*2*1=6
function factorial(number) {
  if (number == 1) {
    return number;
  } else {
    console.log(number);
    return number * factorial(number - 1);
  }
}
factorial(5); //output:24
