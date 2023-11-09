const removeFromArray = function(arr, ...d) {
    //use the spread parameter to get all of the parameters if multiple
    for (const num of d) {
    if (!arr.includes(num)) continue;
    //find the index of our items from d, use that to find the index
    //we need to delete from array
    let itemIndex = arr.indexOf(num);
    //use slice to get rid of the elements from d
    arr.splice(itemIndex, 1);
    }


    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
