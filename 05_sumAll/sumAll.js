const sumAll = function(start, end) {
    let result = 0;

    if (start < 0 || end < 0) {
        return "ERROR";
        //negative values return an error
    } else if (!Number.isFinite(start) || !Number.isFinite(end)) {
        return "ERROR";
        //check if values are strictly numbers 
    } else if (start > end) {
        let temp = start; 
        start = end; 
        end = temp;
        //temporary variable to allow bigger number first 
    }

    for (i = start; i <= end; i++) {
        result += i;
    }
    return result; 
};

// Do not edit below this line
module.exports = sumAll;
