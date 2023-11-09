const sumAll = function(a, b) {
    //our edge cases, return ERRORS for non negatives
    // and non number types
    if (a < 0 || b < 0) return "ERROR";
    if (typeof a !== "number" || typeof b !== "number") return "ERROR";

    let sum = a;
    if (a < b) {
        for (let i = a+1; i <= b; i++) {
            sum+= i;
        }
    }
    if (b < a) {
        for (let i = a - 1; i >=b; i--) {
            sum+= i;
        }
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
