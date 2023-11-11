const leapYears = function(year) {
    //years divisible by 4 are leap
    // but CANNOT be divisible by 100
    // they CAN be divisible by 400 tho...
    let answer = false;
    if (year % 4 === 0 && !(year % 100 === 0)) answer = true;
    if (year % 400 === 0) answer = true;

    return answer;
};

// Do not edit below this line
module.exports = leapYears;
