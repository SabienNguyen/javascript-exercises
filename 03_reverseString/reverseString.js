const reverseString = function(string) {
    if (string.length <= 1) {
        return string;
    }
    return reverseString(string.slice(string.length/2)) + reverseString(string.slice(0, string.length / 2)); 
};

// Do not edit below this line
module.exports = reverseString;
