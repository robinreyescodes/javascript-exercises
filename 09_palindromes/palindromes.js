const palindromes = function (word) {
    //pointers
    let i = 0;
    let j = word.length-1;


    while (i !== j) {
        if (word[i] !== word[j]) return false;
        console.log(word[i], word[j]);
        i++;
        j--;
    }
    return i === j;
};

// Do not edit below this line
module.exports = palindromes;
