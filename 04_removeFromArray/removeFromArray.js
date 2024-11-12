const removeFromArray = function(vals, ...args) {
    for (let j = 0; j < args.length; j++) {
        for (let i = 0; i < vals.length; i++) {
            if(vals[i] === args[j]) {
                vals.splice(i, 1);
                i--;
            }
        }
    }
    return vals;
};

// Do not edit below this line
module.exports = removeFromArray;
