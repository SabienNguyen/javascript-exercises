const palindromes = function (s) {
    s = s.toLowerCase();
    s = s.replace(/[.,?!"'`\\/(){} ]/g, "");
    let l = 0;
    let r = s.length - 1;
    while (l <= r){
        if(s[l] != s[r]){
            return false;
        }
        l ++; r--;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
