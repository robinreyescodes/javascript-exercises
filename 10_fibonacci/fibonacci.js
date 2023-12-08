const fibonacci = function(num) {
    let j = 0;
    let k = 1;
    let sum;

    if (num < 0) return "OOPS";

    for (let i = 0; i < num; i++) {
        sum = j + k;
        j = k;
        k = sum;
    }



    return j;

};

// Do not edit below this line
module.exports = fibonacci;
