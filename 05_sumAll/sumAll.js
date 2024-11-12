const sumAll = function(num1, num2) {
    if (num1 < 0 || num2 < 0) {
        return 'ERROR';
    }else if (!Number.isInteger(num1) || !Number.isInteger(num2) ) {
        return 'ERROR';
    }

    start = num1 < num2 ? num1 : num2;
    end = num1 < num2 ? num2 : num1;
    let sum = 0;
    for (let i = start; i <= end; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
