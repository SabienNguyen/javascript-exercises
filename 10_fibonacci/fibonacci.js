const fibonacci = function(sequence_index) {
    sequence_index = Number(sequence_index);
    if(sequence_index < 0) {
        return "OOPS";
    }
    if(sequence_index == 0) {
        return 0;
    }
    if(sequence_index <= 2) {
        return 1;
    }
    let prev = 1;
    let curr = 2;
    for(i = 3; i < sequence_index; i++) {
        let temp = curr;
        curr += prev;
        prev = temp;
    }
    return curr;
};

// Do not edit below this line
module.exports = fibonacci;
