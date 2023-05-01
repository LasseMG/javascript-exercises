// const checkIfNumber = function(input1, input2) {
//   if (isNaN(input1) && isNaN(input2)) {
//     return true;
//   } else {
//     return false;
//   }
// }

const add = function(input1, input2) {
  let result = input1 + input2;
  return result;
};

const subtract = function(input1, input2) {
  let result = input1 - input2; 
  return result;
};

const sum = function(numbers) {
  let result = 0;
  numbers.forEach(function(number) {
    result += number; 
  });
  return result; 
};

const multiply = function(array) {
  if (array.length === 0) {
    return 0;
  }
  return array.reduce(function(accumulator, nextItem) {
    return accumulator * nextItem;
  });
};

const power = function(input1, input2) {
  let result = Math.pow(input1, input2)
  return result;
};

const factorial = function(input1) {
  let result = 1; 
  for (let i = 1; i <= input1; i++) {
    result *= i; 
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
