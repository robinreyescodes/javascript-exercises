const add = function(num1, num2) {
  return num1 + num2;

};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
    let current = 0;
    let sum = arr.reduce((acc, cur) => acc + cur, current);
    return sum;
};

const multiply = function(arr) {
    let sum = 1;
    let multipliedNums = arr.reduce((acc, cur) => acc * cur, sum);
    return multipliedNums;

};

const power = function(num, toRaise) {
    let sum = 1;
	for (let i = 0; i < toRaise; i++) {
        sum*= num;
    }
    return sum;
};

const factorial = function(number) {
    let answer = 1;
    while(number > 0) {
        answer *= number;
        number--;
    }
    return answer;
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
