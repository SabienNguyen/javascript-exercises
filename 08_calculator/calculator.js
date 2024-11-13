const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
  return num1 - num2;
};

const sum = function(nums) {
	return nums.reduce((total, num) => {return total + num}, 0);
};

const multiply = function(nums) {
  return nums.reduce((product, num) => {return product * num}, 1);
};

const power = function(base, power) { 
  return base ** power;
};

const factorial = function(num) {
	if(num <= 1) {
    return 1;
  }
  let factorial = 1;
  for (let i = 2; i <= num; i ++) {
    factorial *= i;
  }
  return factorial;
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
